"use client";

interface HomeNavProps {
  hiddenUrl: string;
}

export default function HomeNav({ hiddenUrl }: HomeNavProps) {
  return (
    <button 
      onClick={() => window.open(atob(hiddenUrl), '_blank')}
      className="bg-blue-600 text-white px-4 py-1.5 rounded-full text-sm font-medium hover:bg-blue-700 transition-colors"
    >
      即刻体验
    </button>
  );
}
