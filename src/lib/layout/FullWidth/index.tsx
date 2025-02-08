type Props = {
  children: React.ReactNode;
  className?: string;
  rest?: React.ComponentPropsWithoutRef<"section">;
};

export const FullWidth = ({ children, className, ...rest }: Props) => {
  return (
    <section className={`max-w-full ${className}`} {...rest}>
      {children}
    </section>
  );
};
