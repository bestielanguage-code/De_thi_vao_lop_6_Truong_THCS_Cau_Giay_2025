import React, { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  ShoppingCart,
  Heart,
  CheckCircle,
  XCircle,
  Sparkles,
  Star,
} from "lucide-react";

const App = () => {
  // DỮ LIỆU ĐẦY ĐỦ 30 CÂU HỎI TỪ FILE PDF
  const allQuestions = [
    // 1-2: Pronunciation
    {
      id: 1,
      type: "pron",
      question:
        "Choose the word whose underlined part differs from the other three in pronunciation:",
      options: [
        { l: "A. t", u: "ea", s: "" },
        { l: "B. t", u: "ea", s: "m" },
        { l: "C. w", u: "ea", s: "r" },
        { l: "D. b", u: "ea", s: "n" },
      ],
      answer: 2,
      reward: 100,
    },
    {
      id: 2,
      type: "pron",
      question:
        "Choose the word whose underlined part differs from the other three in pronunciation:",
      options: [
        { l: "A. ", u: "h", s: "and" },
        { l: "B. ", u: "h", s: "our" },
        { l: "C. ", u: "h", s: "ouse" },
        { l: "D. ", u: "h", s: "obby" },
      ],
      answer: 1,
      reward: 100,
    },

    // 3-4: Stress
    {
      id: 3,
      type: "multiple",
      question:
        "Choose the word which differs from the other three in the position of stress:",
      options: ["A. mother", "B. cartoon", "C. weather", "D. tennis"],
      answer: 1,
      reward: 100,
    },
    {
      id: 4,
      type: "multiple",
      question:
        "Choose the word which differs from the other three in the position of stress:",
      options: ["A. beautiful", "B. hamburger", "C. weather", "D. together"],
      answer: 3,
      reward: 100,
    },

    // 5-14: Multiple Choice
    {
      id: 5,
      type: "multiple",
      question: "Tim and Peter _______ STEAM lessons on Wednesdays.",
      options: [
        "A. am not having",
        "B. don't have",
        "C. isn't having",
        "D. doesn't have",
      ],
      answer: 1,
      reward: 150,
    },
    {
      id: 6,
      type: "multiple",
      question: "Would you like _______ sand castles with me?",
      options: ["A. to build", "B. building", "C. built", "D. build"],
      answer: 0,
      reward: 150,
    },
    {
      id: 7,
      type: "multiple",
      question: "She gave him a _______ of chocolate as a birthday gift.",
      options: ["A. can", "B. box", "C. bar", "D. bunch"],
      answer: 2,
      reward: 150,
    },
    {
      id: 8,
      type: "multiple",
      question:
        'Jane: "_______ you wear uniform to school every day?" - Harry: "No, we needn\'t."',
      options: ["A. Can", "B. Should", "C. May", "D. Must"],
      answer: 3,
      reward: 150,
    },
    {
      id: 9,
      type: "multiple",
      question: "Ann was absent from class yesterday because she _______ sick.",
      options: ["A. got", "B. get", "C. gets", "D. to get"],
      answer: 0,
      reward: 150,
    },
    {
      id: 10,
      type: "multiple",
      question: "Mount Everest is the highest _______ the world.",
      options: ["A. on", "B. at", "C. in", "D. to"],
      answer: 2,
      reward: 150,
    },
    {
      id: 11,
      type: "multiple",
      question:
        "Lucy doesn't often want much sugar in her coffee, just _______.",
      options: ["A. a few", "B. any", "C. a lot of", "D. a little"],
      answer: 3,
      reward: 150,
    },
    {
      id: 12,
      type: "multiple",
      question:
        "Do you collect stamps or other things? - Yes, I'm a stamp _______.",
      options: ["A. collector", "B. collecting", "C. collect", "D. collection"],
      answer: 0,
      reward: 150,
    },
    {
      id: 13,
      type: "multiple",
      question:
        "If you don't know what a word means, try to guess the meaning, or _______ the dictionary.",
      options: ["A. face up", "B. pick up", "C. get up", "D. look up"],
      answer: 3,
      reward: 150,
    },
    {
      id: 14,
      type: "multiple",
      question:
        "Where do you usually meet your friends? - We often spend the whole day in the _______.",
      options: [
        "A. library",
        "B. shopping mall",
        "C. bus stop",
        "D. classroom",
      ],
      answer: 1,
      reward: 150,
    },

    // 15-16: Error Correction
    {
      id: 15,
      type: "multiple",
      question:
        "Find the error: 'They often (A) go to bed (B) early and (C) never get up (D) lately.'",
      options: ["A. go to", "B. early", "C. never", "D. lately"],
      answer: 3,
      reward: 200,
    },
    {
      id: 16,
      type: "multiple",
      question:
        "Find the error: 'Do you (A) know (B) how many (C) womens there are in the (D) living room?'",
      options: ["A. know", "B. womens", "C. there are", "D. living room"],
      answer: 1,
      reward: 200,
    },

    // 17-18: Closest Meaning
    {
      id: 17,
      type: "multiple",
      question:
        "CLOSEST in meaning to 'trash': 'I think we shouldn't throw trash into the river.'",
      options: ["A. rubbish", "B. paper", "C. money", "D. candy"],
      answer: 0,
      reward: 200,
    },
    {
      id: 18,
      type: "multiple",
      question:
        "CLOSEST in meaning to 'Finally': 'Finally, we all agreed to go camping in the countryside.'",
      options: ["A. Firstly", "B. Usually", "C. Luckily", "D. Lastly"],
      answer: 3,
      reward: 200,
    },

    // 19-20: Opposite Meaning
    {
      id: 19,
      type: "multiple",
      question:
        "OPPOSITE in meaning to 'lazy': 'Felix usually gets bad marks because he's very lazy.'",
      options: ["A. quiet", "B. hard-working", "C. confident", "D. kind"],
      answer: 1,
      reward: 200,
    },
    {
      id: 20,
      type: "multiple",
      question:
        "OPPOSITE in meaning to 'Turn off': 'Turn off the tap when we brush our teeth...'",
      options: ["A. Turn down", "B. Turn over", "C. Turn on", "D. Turn up"],
      answer: 2,
      reward: 200,
    },

    // 21-22: Response
    {
      id: 21,
      type: "multiple",
      question: "What's your younger brother like?",
      options: [
        "A. He likes cooking",
        "B. He'd like a cup of coffee",
        "C. He's talkative and funny",
        "D. He has blonde hair",
      ],
      answer: 2,
      reward: 200,
    },
    {
      id: 22,
      type: "multiple",
      question:
        "Jerry: 'I think we should use less paper in order to save trees.'",
      options: [
        "A. Congratulations",
        "B. That's a good idea",
        "C. It's nice of you",
        "D. Yes, I'd love to",
      ],
      answer: 1,
      reward: 200,
    },

    // 33-40: Sentence Transformation
    {
      id: 33,
      type: "multiple",
      question:
        "Reorder: take / the kids / They / cinema / the / next / to / Sunday / will",
      options: [
        "A. They will take the kids to the cinema next Sunday.",
        "B. They take the kids to the cinema next Sunday will.",
        "C. They will to the cinema take the kids next Sunday.",
        "D. Next Sunday they take will the kids to cinema.",
      ],
      answer: 0,
      reward: 300,
    },
    {
      id: 34,
      type: "multiple",
      question:
        "Reorder: He / a / saw / in / big / car / black / the / beautiful / street / last week",
      options: [
        "A. He saw a beautiful black big car in the street last week.",
        "B. He saw a beautiful big black car in the street last week.",
        "C. He big black car saw a beautiful in the street.",
        "D. A beautiful big black car he saw last week.",
      ],
      answer: 1,
      reward: 300,
    },
    {
      id: 35,
      type: "multiple",
      question:
        "Rewrite: 'The woman couldn't buy this flat because she was very poor.'",
      options: [
        "A. The woman was very poor, so she couldn't buy this flat.",
        "B. The woman was poor enough to buy this flat.",
        "C. Although the woman was poor, she bought this flat.",
        "D. Because of poor, she couldn't buy this flat.",
      ],
      answer: 0,
      reward: 300,
    },
    {
      id: 36,
      type: "multiple",
      question: "Rewrite: 'Let's decorate our house before Tet.'",
      options: [
        "A. How about decorate our house before Tet?",
        "B. Why don't we decorate our house before Tet?",
        "C. Why not to decorate our house before Tet?",
        "D. Shall we decorating our house before Tet?",
      ],
      answer: 1,
      reward: 300,
    },
    {
      id: 37,
      type: "multiple",
      question: "Rewrite: 'The anime film was so boring that I fell asleep.'",
      options: [
        "A. It was such boring anime film that I fell asleep.",
        "B. It was such a boring anime film that I fell asleep.",
        "C. The film is too boring for me to falling asleep.",
        "D. Such a boring film it is that I fell asleep.",
      ],
      answer: 1,
      reward: 300,
    },
    {
      id: 38,
      type: "multiple",
      question:
        "Make sentence: not / forget / clean / table / after lunch time",
      options: [
        "A. Not forget clean table after lunch time.",
        "B. Don't forget to clean the table after lunch time.",
        "C. No forget cleaning the table after lunch time.",
        "D. Don't forget clean the table after lunch time.",
      ],
      answer: 1,
      reward: 300,
    },
    {
      id: 39,
      type: "multiple",
      question:
        "Make sentence: when / I / child / often / make / paper planes / my sister",
      options: [
        "A. When I was a child, I often made paper planes with my sister.",
        "B. When I child, I often make paper planes with my sister.",
        "C. When I am a child, I often made paper planes with my sister.",
        "D. I was a child, I often made paper planes with my sister.",
      ],
      answer: 0,
      reward: 300,
    },
    {
      id: 40,
      type: "multiple",
      question:
        "Make sentence: recycle / effective / solution / help / protect / environment",
      options: [
        "A. Recycle is an effective solution to help protect environment.",
        "B. Recycling is an effective solution to help protect the environment.",
        "C. Recycling is effective solution to help protecting environment.",
        "D. To recycle is an effectively solution to help protect environment.",
      ],
      answer: 1,
      reward: 300,
    },
  ];

  const shopItems = [
    { id: "lipstick", name: "Son Môi Đào", price: 200, icon: "💄" },
    { id: "earrings", name: "Bông Tai Kim Cương", price: 500, icon: "💎" },
    { id: "veil", name: "Khăn Voan Trắng", price: 800, icon: "👰" },
    { id: "bouquet", name: "Bó Hoa Cưới", price: 1000, icon: "💐" },
    { id: "crown", name: "Vương Miện Vàng", price: 1500, icon: "👑" },
    { id: "dress", name: "Váy Cưới Lộng Lẫy", price: 2500, icon: "👗" },
  ];

  const [currentIdx, setCurrentIdx] = useState(0);
  const [money, setMoney] = useState(0);
  const [purchased, setPurchased] = useState([]);
  const [answers, setAnswers] = useState({});

  const currentQ = allQuestions[currentIdx];

  const handleSelect = (idx) => {
    if (answers[currentIdx] !== undefined) return;
    if (idx === currentQ.answer) {
      setMoney((prev) => prev + currentQ.reward);
    }
    setAnswers({ ...answers, [currentIdx]: idx });
  };

  const buy = (item) => {
    if (money >= item.price && !purchased.includes(item.id)) {
      setMoney((prev) => prev - item.price);
      setPurchased([...purchased, item.id]);
    }
  };

  return (
    <div className="min-h-screen bg-[#FFF0F3] p-4 md:p-8 font-sans text-gray-700">
      {/* Top Bar */}
      <div className="max-w-6xl mx-auto mb-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-3">
          <div className="bg-white p-3 rounded-2xl shadow-sm border-2 border-pink-100">
            <Heart className="text-pink-400 fill-pink-400" size={28} />
          </div>
          <div>
            <h1 className="text-2xl font-black text-pink-500 tracking-tight uppercase">
              Bridal Makeup Quest
            </h1>
            <p className="text-pink-300 text-xs font-bold tracking-widest uppercase">
              Thanh Xuân - Cầu Giấy 2025
            </p>
          </div>
        </div>

        <div className="bg-white px-6 py-3 rounded-full shadow-md border-b-4 border-yellow-200 flex items-center gap-3">
          <div className="bg-yellow-400 p-1.5 rounded-full">
            <Star size={16} className="text-white fill-white" />
          </div>
          <span className="text-2xl font-black text-yellow-600">${money}</span>
          <Sparkles className="text-yellow-400" size={20} />
        </div>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Main Quiz Section */}
        <div className="lg:col-span-7 space-y-6">
          <div className="bg-white rounded-[2.5rem] shadow-xl shadow-pink-100/50 p-8 md:p-12 relative overflow-hidden border-2 border-pink-50 min-h-[500px]">
            {/* Progress Header */}
            <div className="flex justify-between items-center mb-10">
              <div className="flex flex-col">
                <span className="text-[10px] font-black text-pink-200 uppercase tracking-widest mb-1">
                  Tiến trình học tập
                </span>
                <div className="flex items-center gap-2">
                  {allQuestions.map((_, i) => (
                    <div
                      key={i}
                      className={`h-1.5 w-3 rounded-full transition-all ${
                        i === currentIdx
                          ? "w-8 bg-pink-400"
                          : answers[i] !== undefined
                          ? "bg-pink-100"
                          : "bg-gray-100"
                      }`}
                    />
                  ))}
                </div>
              </div>
              <div className="bg-pink-50 text-pink-500 px-4 py-2 rounded-2xl text-xs font-black border border-pink-100">
                CÂU {currentIdx + 1} / 30
              </div>
            </div>

            {/* Question Text */}
            <h2 className="text-xl font-bold text-gray-800 mb-10 leading-relaxed">
              {currentQ.question}
            </h2>

            {/* Options */}
            <div className="space-y-3">
              {currentQ.options.map((opt, i) => {
                const isSelected = answers[currentIdx] === i;
                const isCorrect = i === currentQ.answer;
                const showResult = answers[currentIdx] !== undefined;

                return (
                  <button
                    key={i}
                    onClick={() => handleSelect(i)}
                    disabled={showResult}
                    className={`w-full p-5 rounded-2xl text-left border-2 transition-all flex justify-between items-center group relative overflow-hidden ${
                      showResult
                        ? isCorrect
                          ? "border-green-400 bg-green-50 text-green-700"
                          : isSelected
                          ? "border-red-300 bg-red-50 text-red-500"
                          : "border-gray-100 opacity-60"
                        : "border-gray-50 hover:border-pink-200 hover:bg-pink-50/30"
                    }`}
                  >
                    <div className="flex-1">
                      {currentQ.type === "pron" ? (
                        <span className="font-bold tracking-wide">
                          {opt.l}
                          <span className="underline decoration-pink-400 decoration-2 underline-offset-4 font-black text-pink-600">
                            {opt.u}
                          </span>
                          {opt.s}
                        </span>
                      ) : (
                        <span className="font-bold">{opt}</span>
                      )}
                    </div>
                    {showResult &&
                      (isCorrect ? (
                        <CheckCircle className="text-green-500" />
                      ) : (
                        isSelected && <XCircle className="text-red-400" />
                      ))}
                  </button>
                );
              })}
            </div>

            {/* Navigation Controls */}
            <div className="mt-12 pt-8 border-t border-pink-50 flex justify-between">
              <button
                onClick={() => currentIdx > 0 && setCurrentIdx(currentIdx - 1)}
                className="flex items-center gap-2 text-pink-300 hover:text-pink-500 font-black text-sm transition-all"
              >
                <ChevronLeft size={24} /> QUAY LẠI
              </button>
              <button
                onClick={() =>
                  currentIdx < allQuestions.length - 1 &&
                  setCurrentIdx(currentIdx + 1)
                }
                className="flex items-center gap-2 text-pink-400 hover:text-pink-600 font-black text-sm transition-all"
              >
                TIẾP THEO <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </div>

        {/* Character & Boutique Section */}
        <div className="lg:col-span-5 space-y-8">
          {/* Visual Character */}
          <div className="bg-white rounded-[3rem] shadow-xl p-8 border-2 border-pink-50 relative group">
            <div className="w-full h-80 bg-gradient-to-br from-[#FFF0F3] to-white rounded-[2.5rem] flex items-center justify-center relative overflow-hidden border border-pink-100">
              {/* Character Base */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                {/* Face */}
                <div className="w-24 h-24 bg-[#FFE0CC] rounded-full mb-[-10px] relative z-20 border-2 border-[#FFD1B3] shadow-sm">
                  <div className="absolute top-[45%] left-[25%] w-2 h-2 bg-[#4A3728] rounded-full"></div>
                  <div className="absolute top-[45%] right-[25%] w-2 h-2 bg-[#4A3728] rounded-full"></div>
                  {/* Blush */}
                  <div className="absolute top-[55%] left-[15%] w-3 h-1.5 bg-pink-200/40 rounded-full blur-[1px]"></div>
                  <div className="absolute top-[55%] right-[15%] w-3 h-1.5 bg-pink-200/40 rounded-full blur-[1px]"></div>
                  {/* Mouth */}
                  <div
                    className={`absolute bottom-5 left-1/2 -translate-x-1/2 w-4 h-2 rounded-full border-b-2 border-red-300 transition-all ${
                      purchased.includes("lipstick")
                        ? "bg-red-400 h-2.5 border-red-600"
                        : ""
                    }`}
                  ></div>
                </div>
                {/* Dress Body */}
                <div
                  className={`w-36 h-44 rounded-t-[3rem] transition-all duration-1000 shadow-inner z-10 ${
                    purchased.includes("dress")
                      ? "bg-white border-x-4 border-t-4 border-pink-50"
                      : "bg-pink-100"
                  }`}
                >
                  {purchased.includes("dress") && (
                    <div className="w-full h-full opacity-10 bg-[radial-gradient(circle,_#ff69b4_1px,_transparent_1px)] bg-[size:12px_12px]"></div>
                  )}
                </div>
              </div>

              {/* Overlays */}
              {purchased.includes("veil") && (
                <div className="absolute top-8 w-32 h-44 bg-white/40 rounded-t-full backdrop-blur-[1px] border border-white/40 z-0 animate-pulse"></div>
              )}
              {purchased.includes("crown") && (
                <div className="absolute top-12 text-4xl z-30 drop-shadow-md animate-bounce">
                  👑
                </div>
              )}
              {purchased.includes("bouquet") && (
                <div className="absolute bottom-14 right-14 text-4xl z-30 drop-shadow-lg rotate-12 transition-all">
                  💐
                </div>
              )}
              {purchased.includes("earrings") && (
                <>
                  <div className="absolute top-[135px] left-[165px] text-yellow-400 text-[10px] z-30 animate-pulse">
                    💎
                  </div>
                  <div className="absolute top-[135px] right-[165px] text-yellow-400 text-[10px] z-30 animate-pulse">
                    💎
                  </div>
                </>
              )}
            </div>

            <div className="mt-6 text-center">
              <h3 className="text-lg font-black text-pink-400 tracking-tighter uppercase">
                My Gorgeous Bride
              </h3>
              <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mt-1 italic">
                Sưu tập đủ 6 món để cô dâu tỏa sáng!
              </p>
            </div>
          </div>

          {/* Boutique Shop */}
          <div className="bg-white rounded-[3rem] shadow-xl p-8 border-2 border-pink-50">
            <h3 className="flex items-center gap-2 font-black mb-6 text-gray-800 uppercase text-xs tracking-widest">
              <ShoppingCart size={18} className="text-pink-400" /> Bridal
              Boutique
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {shopItems.map((item) => {
                const isBought = purchased.includes(item.id);
                const canAfford = money >= item.price;
                return (
                  <button
                    key={item.id}
                    disabled={isBought || !canAfford}
                    onClick={() => buy(item)}
                    className={`p-4 rounded-3xl border-2 transition-all relative group flex flex-col items-center gap-1 ${
                      isBought
                        ? "bg-gray-50 border-gray-100 opacity-60 grayscale"
                        : canAfford
                        ? "border-pink-100 hover:border-pink-400 bg-white hover:shadow-lg hover:-translate-y-1"
                        : "border-gray-50 bg-gray-50 opacity-40 cursor-not-allowed"
                    }`}
                  >
                    <span className="text-3xl mb-1 transition-transform group-hover:scale-125">
                      {item.icon}
                    </span>
                    <span className="font-black text-[9px] text-gray-400 uppercase text-center leading-tight">
                      {item.name}
                    </span>
                    <span
                      className={`text-xs font-black ${
                        canAfford && !isBought
                          ? "text-yellow-500"
                          : "text-gray-300"
                      }`}
                    >
                      ${item.price}
                    </span>
                    {isBought && (
                      <div className="absolute inset-0 bg-white/40 flex items-center justify-center rounded-3xl backdrop-blur-[1px]">
                        <CheckCircle
                          size={24}
                          className="text-pink-400 fill-white"
                        />
                      </div>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <footer className="mt-16 text-center">
        <p className="text-pink-200 text-[10px] font-black uppercase tracking-[0.3em]">
          Interactive Learning &bull; Cầu Giấy 2025 Prep &bull; Designed for
          Students
        </p>
      </footer>
    </div>
  );
};

export default App;
