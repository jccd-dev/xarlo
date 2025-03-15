interface GridLetterProps {
  letter: string;
  colStart: number;
  isBottom?: boolean;
}

export function GridLetter({
  letter,
  colStart,
  isBottom = false,
}: GridLetterProps) {
  return (
    <div
      className={`col-span-1 col-start-${colStart} flex ${isBottom ? 'items-end pb-32' : 'items-center'}`}
    >
      <span className='text-[clamp(6rem,15vw,12rem)] font-medium text-white'>
        {letter}
      </span>
    </div>
  );
}
