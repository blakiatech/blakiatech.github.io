import { useState, useEffect, useRef } from "react";
import { Bot, Send, X } from "lucide-react";
import { marked } from "marked";
import { cn } from "@/lib/utils";

interface Message {
    text: string;
    type: "user" | "bot";
    isError?: boolean;
}

export function Chatbot() {
    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const scrollRef = useRef<HTMLDivElement>(null);
    const textareaRef = useRef<HTMLTextAreaElement>(null);
    const [viewportHeight, setViewportHeight] = useState("100vh");

    // Load history and setup viewport
    useEffect(() => {
        // Load messages
        const saved = sessionStorage.getItem("chatMessages");
        if (saved) {
            try {
                setMessages(JSON.parse(saved));
            } catch (e) {
                console.error("Failed to load chat history", e);
            }
        } else {
            setMessages([
                {
                    text: "Hola, soy el asistente virtual de BlakIA. ¿En qué puedo ayudarte hoy?",
                    type: "bot",
                },
            ]);
        }

        // Viewport adjustment
        const handleResize = () => {
            if (window.visualViewport) {
                setViewportHeight(`${window.visualViewport.height}px`);
            }
        };

        window.visualViewport?.addEventListener("resize", handleResize);
        window.visualViewport?.addEventListener("scroll", handleResize);

        return () => {
            window.visualViewport?.removeEventListener("resize", handleResize);
            window.visualViewport?.removeEventListener("scroll", handleResize);
        };
    }, []);

    // Save history on change
    useEffect(() => {
        if (messages.length > 0) {
            sessionStorage.setItem("chatMessages", JSON.stringify(messages));
        }
        // Scroll to bottom
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages]);

    // Auto-resize textarea
    useEffect(() => {
        if (textareaRef.current) {
            textareaRef.current.style.height = 'auto';
            textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
        }
    }, [input]);

    const handleSend = async () => {
        if (!input.trim()) return;

        const userMsg: Message = { text: input.trim(), type: "user" };
        setMessages((prev) => [...prev, userMsg]);
        setInput("");
        setIsLoading(true);

        // Reset textarea height
        if (textareaRef.current) textareaRef.current.style.height = 'auto';

        try {
            const response = await fetch(
                "https://n8n-main-instance-production-96ac.up.railway.app/webhook/chat",
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ message: userMsg.text }),
                }
            );

            const data = await response.json();
            const botMsg: Message = {
                text: data.reply || "Lo siento, no tengo respuesta para eso.",
                type: "bot",
            };
            setMessages((prev) => [...prev, botMsg]);
        } catch (error) {
            console.error(error);
            setMessages((prev) => [
                ...prev,
                { text: "Error de conexión. Intenta más tarde.", type: "bot", isError: true },
            ]);
        } finally {
            setIsLoading(false);
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    };

    const handleClose = () => {
        if (window.parent) {
            window.parent.postMessage({ closeChat: true }, "*");
        }
    };

    const renderMessageContent = (msg: Message) => {
        if (msg.isError) {
            return (
                <span className="flex items-center gap-1.5 text-destructive">
                    ❌ {msg.text}
                </span>
            );
        }

        // Parse markdown safely
        const __html = marked.parse(msg.text, { async: false }) as string;
        return <div dangerouslySetInnerHTML={{ __html }} className="prose prose-sm prose-invert max-w-none break-words" />;
    };

    return (
        <div
            className="flex flex-col bg-background border border-border w-full overflow-hidden relative shadow-2xl h-full font-sans"
            style={{ height: viewportHeight }}
        >
            {/* Header */}
            <div className="bg-muted/50 p-4 text-center font-semibold text-sm border-b border-border flex justify-between items-center shrink-0">
                <div className="flex items-center gap-2 text-foreground">
                    <div className="bg-primary/10 p-1.5 rounded-full text-primary">
                        <Bot size={18} />
                    </div>
                    <span>Asistente BlakIA</span>
                </div>
                <div
                    onClick={handleClose}
                    title="Cerrar chat"
                    className="cursor-pointer text-muted-foreground hover:text-foreground transition-colors p-1 hover:bg-muted rounded-md"
                >
                    <X size={18} />
                </div>
            </div>

            {/* Chat Messages */}
            <div
                ref={scrollRef}
                className="flex-1 p-4 overflow-y-auto flex flex-col gap-4 scroll-smooth"
            >
                {messages.map((msg, idx) => (
                    <div
                        key={idx}
                        className={cn(
                            "flex flex-col gap-1 max-w-[85%]",
                            msg.type === "user" ? "items-end self-end" : "items-start self-start"
                        )}
                    >
                        {msg.type === "bot" && (
                            <span className="text-xs text-muted-foreground ml-1">BlakIA</span>
                        )}
                        <div
                            className={cn(
                                "p-3 px-4 rounded-2xl break-words whitespace-pre-wrap text-sm leading-relaxed shadow-sm",
                                msg.type === "user"
                                    ? "bg-primary text-primary-foreground rounded-tr-none"
                                    : "bg-muted text-foreground rounded-tl-none border border-border/50"
                            )}
                        >
                            {msg.type === "bot" && !msg.isError ? (
                                // Use a helper handling markdown parsing
                                <div
                                    dangerouslySetInnerHTML={{ __html: marked.parse(msg.text) as string }}
                                    className="[&>p]:m-0 [&>a]:underline [&>a]:font-medium [&>a]:hover:opacity-80 [&>code]:bg-black/20 [&>code]:px-1 [&>code]:rounded [&>code]:font-mono [&>code]:text-xs"
                                />
                            ) : (
                                msg.isError ? (
                                    <span className="flex items-center gap-1.5 text-destructive">
                                        ❌ {msg.text}
                                    </span>
                                ) : (
                                    msg.text
                                )
                            )}
                        </div>
                    </div>
                ))}

                {isLoading && (
                    <div className="flex flex-col gap-1 items-start max-w-[85%]">
                        <span className="text-xs text-muted-foreground ml-1">BlakIA</span>
                        <div className="bg-muted text-foreground rounded-2xl rounded-tl-none p-4 px-4 border border-border/50 flex gap-1 items-center h-[44px]">
                            <span className="w-1.5 h-1.5 bg-foreground/40 rounded-full animate-bounce"></span>
                            <span className="w-1.5 h-1.5 bg-foreground/40 rounded-full animate-bounce delay-150"></span>
                            <span className="w-1.5 h-1.5 bg-foreground/40 rounded-full animate-bounce delay-300"></span>
                        </div>
                    </div>
                )}
            </div>

            {/* Input Area */}
            <div className="flex flex-col border-t border-border bg-background p-3 gap-2 sticky bottom-0 z-10 shrink-0">
                <div className="flex gap-2 items-end">
                    <textarea
                        ref={textareaRef}
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={handleKeyDown}
                        placeholder="Escribe tu mensaje..."
                        rows={1}
                        className="flex-1 min-h-[44px] max-h-[120px] p-3 py-2.5 border border-input rounded-xl bg-background text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary resize-none scrollbar-hide"
                    />
                    <button
                        onClick={handleSend}
                        disabled={isLoading || !input.trim()}
                        className="bg-primary text-primary-foreground h-[44px] w-[44px] flex items-center justify-center rounded-xl cursor-pointer hover:bg-primary/90 transition-all shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        <Send size={18} />
                    </button>
                </div>
                <div className="text-center">
                    <span className="text-[10px] text-muted-foreground">
                        Powered by BlakIA Tech
                    </span>
                </div>
            </div>
        </div>
    );
}
