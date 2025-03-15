interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export default function Container({
  children,
  className = '',
}: ContainerProps) {
  return (
    <div className={`mx-auto overflow-hidden px-4 md:px-[5%] ${className}`}>
      {children}
    </div>
  );
}
