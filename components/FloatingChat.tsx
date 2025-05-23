// components/FloatingChat.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import { Bot, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { TypingIndicator } from "./TypingEffect";
import ReactMarkdown from "react-markdown";

type Message = {
  from: "user" | "bot";
  text: string;
};

function FloatingChat() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement | null>(null);

  const quickSnippets = [
    "Siapa itu Riyan?",
    "Apa minat utama Riyan di dunia teknologi?",
    "Apa alasan Riyan tertarik ke AI dan Web3?",
    "Bagaimana perjalanan Riyan belajar coding?",
    "Apa tujuan jangka panjang Riyan di bidang teknologi?",
    "Apa saja skill yang dikuasai Riyan saat ini?",
    "Apa latar belakang pendidikan Riyan?",
  ];

  const handleAsk = async (question: string) => {
    if (!question.trim()) return;

    const userMessage: Message = { from: "user", text: question };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const res = await fetch("/api/ai/ask", {
        method: "POST",
        body: JSON.stringify({
          question,
          content: "Riyan adalah seorang Web Developer yang fokus pada AI, Web3, dan SaaS seperti Form2WA dan MUNU.",
          language: "id",
        }),
      });

      const data = await res.json();

      setMessages((prev) => [
        ...prev,
        { from: "bot", text: data.result || "Maaf, terjadi kesalahan." },
      ]);
    } catch (err) {
      console.error(err);
      setMessages((prev) => [
        ...prev,
        { from: "bot", text: "Terjadi kesalahan saat menghubungi AI." },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleAsk(input);
  };

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  return (
    <>
      <Button
        variant="default"
        size="icon"
        className="fixed p-6 bottom-6 right-6 z-50 rounded-full shadow-xl"
        onClick={() => setOpen(true)}
        aria-label="Open Assistant"
      >
        <Bot className="w-10 h-10" />
      </Button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent
          className="!fixed bottom-4 right-4 !top-auto !left-auto !translate-x-0 !translate-y-0 w-[90%] md:max-w-[360px] md:w-[360px] h-[80vh] p-0 z-50 shadow-xl"
        >
          <div className="flex flex-col h-full w-full bg-white rounded-md border">
            <div className="flex items-center justify-between px-4 py-3 border-b bg-muted rounded-t-lg">
              <DialogTitle className="font-medium text-sm">Chat with Riyan Assistant</DialogTitle>
            </div>

            <ScrollArea className="px-4 py-3 grow overflow-y-auto h-72 w-full">
              <div className="space-y-2 flex flex-col">
                {messages.map((msg, i) => (
                  <div key={i} className={`flex items-end gap-2 ${msg.from === "user" ? "justify-end" : "justify-start"}`}>
                    {msg.from === "bot" && (
                      <Avatar><AvatarFallback>B</AvatarFallback></Avatar>
                    )}

                    <div className={`text-sm px-4 py-2 rounded-md max-w-[70%] whitespace-pre-wrap ${msg.from === "user" ? "bg-primary text-white" : "bg-muted text-muted-foreground"}`}>
                      <ReactMarkdown
                        components={{
                          p: ({ children }) => <p className="mb-1">{children}</p>,
                          strong: ({ children }) => <strong className="font-semibold">{children}</strong>,
                          ul: ({ children }) => <ul className="list-disc ml-5">{children}</ul>,
                          li: ({ children }) => <li className="mb-1">{children}</li>,
                          a: ({ children, href }) => <a href={href} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">{children}</a>,
                        }}
                      >
                        {msg.text}
                      </ReactMarkdown>
                    </div>

                    {msg.from === "user" && (
                      <Avatar><AvatarFallback>U</AvatarFallback></Avatar>
                    )}
                  </div>
                ))}

                {isLoading && (
                  <div className="flex gap-2 items-center">
                    <Avatar><AvatarFallback>B</AvatarFallback></Avatar>
                    <TypingIndicator />
                  </div>
                )}

                <div ref={bottomRef} />
              </div>
            </ScrollArea>

            <ScrollArea className="max-w-[350px] overflow-x-auto whitespace-nowrap px-3 py-2">
              <div className="inline-flex gap-2 w-max">
                {quickSnippets.map((snippet, i) => (
                  <Button
                    key={i}
                    variant="ghost"
                    type="button"
                    className="text-sm px-4 py-1 border rounded-full transition whitespace-nowrap"
                    onClick={() => handleAsk(snippet)}
                    disabled={isLoading}
                  >
                    {snippet}
                  </Button>
                ))}
              </div>
              <ScrollBar orientation="horizontal" />
            </ScrollArea>

            <form onSubmit={handleSubmit} className="border-t p-3 flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ketik pesan..."
                className="flex-1 border rounded-full px-6 py-1"
                disabled={isLoading}
              />
              <Button type="submit" size="icon" className="rounded-full p-6" disabled={isLoading}>
                <Send className="h-6 w-6" />
              </Button>
            </form>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default FloatingChat;