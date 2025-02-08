type Props = {
  children: React.ReactNode;
  className?: string;
  rest?: React.ComponentPropsWithoutRef<"section">;
  noSection?: boolean;
};

export const Boxed = ({ children, className, noSection, ...rest }: Props) => {
  if (noSection) {
    return (
      <div className={`max-w-screen-2xl mx-auto px-4 ${className}`} {...rest}>
        {children}
      </div>
    );
  } else {
    return (
      <section
        className={`max-w-screen-2xl mx-auto px-4 ${className}`}
        {...rest}
      >
        {children}
      </section>
    );
  }
};
