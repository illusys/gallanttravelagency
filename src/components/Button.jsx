export const Button = ({ className, children, variant, contentKey, ... props }) => {
  return (
    <button id="mobileMenuBtn" className={className} {...props}>{children}</button>
  );
};
