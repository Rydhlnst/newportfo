import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 30000); // Timeout 30 detik

  try {
    const { question, language } = await req.json();

    const content = `
    Nama saya Riyan. Saya adalah seorang mahasiswa Teknik Komputer di Telkom University. 
    Saya fokus dalam bidang pengembangan web fullstack menggunakan Next.js, Tailwind CSS, TypeScript, dan MongoDB. 
    Saya juga tertarik dalam Web3, AI/ML, dan membangun SaaS, salah satunya adalah Form2WA. 
    Saya sudah membuat berbagai proyek seperti website portofolio 404ryan.com, aplikasi delivery dengan filter kesehatan yang memenangkan medali silver di MIIEX Makau, dan project AI Note Summarizer dengan MongoDB.

    Saya menggunakan style komponen modular seperti AnswerCard.tsx, struktur folder ala proyek v2devoverflow, dan mengintegrasikan animasi GSAP serta Rive ke dalam portofolio saya. 
    Saya memiliki minat dalam arbitrase crypto dan sedang mengembangkan strategi sendiri. 
    Saya juga aktif menggunakan OpenRouter untuk akses AI gratis. Saat ini, saya sedang mempelajari Machine Learning melalui program bootcamp serta belajar Solidity sebagai bagian dari pengembangan Web3.

    Alasan saya mempelajari Web3 bukan hanya karena tertarik, tetapi juga karena:
    1. Peluang karier dan finansial yang masih sangat besar karena kebutuhan developer Web3 sangat tinggi.
    2. Keinginan untuk terus belajar teknologi inovatif seperti smart contract, NFT, dan DeFi.
    3. Semangat untuk memberikan dampak sosial nyata melalui akses keuangan dan kepemilikan digital yang lebih adil bagi semua orang.

    Alasan saya mempelajari AI:
    1. AI adalah sektor industri teknologi yang berkembang sangat pesat dengan pengaruh besar di berbagai bidang.
    2. AI memiliki potensi besar untuk meningkatkan efisiensi dan produktivitas dalam berbagai aspek kehidupan dan bisnis.
    3. AI dapat memberdayakan teknologi lain seperti Web3 dan IoT, memperluas potensi sinergi antar sistem cerdas.
    4. AI memungkinkan pembuatan layanan yang sangat personal, seperti asisten pintar dan sistem rekomendasi.
    5. Dengan mempelajari AI, saya ingin berkontribusi dalam inovasi dan riset masa depan sebagai seorang AI Developer.

    Tujuan jangka panjang saya di bidang teknologi adalah untuk membantu mewujudkan sistem Decentralized Finance (DeFi) yang lebih adil dan inklusif bagi semua orang.
    `.trim();


    const prompt = `
    You are Riyan's AI assistant.
    Only respond based on the provided context below.

    Context:
    ${content}

    User question:
    ${question}

    Instructions:
    - Respond in ${language === "id" ? "Bahasa Indonesia" : "English"}.
    - Answer clearly and concisely (maximum 2 sentences).
    - Do NOT make up any information outside the context.
    - If not found in the context, reply with: "Maaf, saya tidak memiliki informasi tersebut."
        `.trim();

    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.OPENROUTER_API_KEY}`,
        "HTTP-Referer": "https://newportfo-psi.vercel.app/",
        "X-Title": "404Riyan AI Chat"
      },
      body: JSON.stringify({
        model: "google/gemini-2.0-flash-exp:free",
        messages: [{ role: "user", content: prompt }],
        max_tokens: 200
      }),
      signal: controller.signal,
    });

    clearTimeout(timeout);

    const data = await response.json();
    console.log("Raw AI response:", JSON.stringify(data, null, 2));

    return NextResponse.json({
      result: data.choices?.[0]?.message?.content || "No response from AI.",
    });

  } catch (err: unknown) {
    clearTimeout(timeout);

    if (err instanceof Error && err.name === "AbortError") {
      console.error("⏰ Timeout: Permintaan ke OpenRouter terlalu lama.");
      return NextResponse.json({ error: "Timeout: AI tidak merespon dalam 30 detik." }, { status: 504 });
    }

    console.error("[AI ERROR]", err);
    return NextResponse.json({ error: "Gagal memproses permintaan AI." }, { status: 500 });
  }
}
