import { cn } from '@/lib/utils';

interface PriceProps {
  text: string;
  className?: string;
}

export function Price({ text, className }: PriceProps) {
  return (
    <p
      className={cn(
        'min-w-[64px] h-[26px] px-2 bg-letter-500 inline-flex items-center justify-center text-[13px] font-bold rounded-md text-white leading-3',
        className
      )}
    >
      {text}
    </p>
  );
}
