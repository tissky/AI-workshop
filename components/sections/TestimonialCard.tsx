"use client";

export interface TestimonialProps {
  quote: string;
  author: string;
  role?: string;
  avatar?: string;
}

export default function TestimonialCard({
  quote,
  author,
  role,
  avatar
}: TestimonialProps) {
  return (
    <article className="bg-background border border-border rounded-xl p-8 shadow-card hover:shadow-lg transition-all duration-300">
      <blockquote>
        <p className="text-foreground text-lg leading-relaxed mb-6 text-pretty">
          &ldquo;{quote}&rdquo;
        </p>
      </blockquote>
      
      <footer className="flex items-center gap-4">
        {avatar && (
          <img
            src={avatar}
            alt={`${author}的头像`}
            className="w-12 h-12 rounded-full object-cover border border-border"
            loading="lazy"
          />
        )}
        {!avatar && (
          <div className="w-12 h-12 rounded-full bg-muted border border-border flex items-center justify-center">
            <span className="text-muted-foreground font-semibold">
              {author.charAt(0)}
            </span>
          </div>
        )}
        
        <div>
          <cite className="font-semibold text-foreground not-italic block">
            {author}
          </cite>
          {role && (
            <p className="text-muted-foreground text-sm">{role}</p>
          )}
        </div>
      </footer>
    </article>
  );
}
