import { cn } from "@/lib/utils";

const ProductPrice = ({ value, className }: { value: string, className?: string }) => {
  // Ensure we have two decimal places
  const stringValue = typeof value === 'number' ? (value as number).toFixed(2) : value;
  const [intValue, floatValue] = stringValue.split('.');

  return (
    <p className={cn("font-bold text-2xl flex flex-row items-start", className)}>
      <span className="text-xs mr-0.5 leading-snug tracking-tighter self-start translate-y-1">$</span>
      <span>{intValue}</span>
      <span className="text-xs leading-snug tracking-tighter self-start translate-y-1">.{floatValue || '00'}</span>
    </p>
  );
}

export default ProductPrice;
