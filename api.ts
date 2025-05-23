export const ai = {
    ask: async (question: string, content: string, language: string, section: string) => {
      const response = await fetch("/api/ai/ask", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ question, content, language, section }),
      });
  
      if (!response.ok) {
        throw new Error("Failed to get AI response");
      }
  
      const reader = response.body?.getReader();
      const decoder = new TextDecoder();
      let buffer = "";
      let finalText = "";
  
      if (reader) {
        while (true) {
          const { value, done } = await reader.read();
          if (done) break;
          buffer += decoder.decode(value, { stream: true });
  
          const lines = buffer.split("\n");
          buffer = lines.pop() || "";
  
          for (const line of lines) {
            const trimmedLine = line.trim();
            if (trimmedLine.startsWith("data: ")) {
              const jsonStr = trimmedLine.replace("data: ", "");
              if (jsonStr === "[DONE]") {
                break;
              }
              try {
                const parsed = JSON.parse(jsonStr);
                const content = parsed.choices?.[0]?.delta?.content;
                if (content) {
                  finalText += content;
                }
              } catch (err) {
                console.error("Error parsing AI stream chunk:", err);
              }
            }
          }
        }
      }
  
      return finalText;
    }
  }
  