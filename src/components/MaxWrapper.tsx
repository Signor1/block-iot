
type MaxWrapperTypes = {
    children: React.ReactNode;
    className?: string;
};

const MaxWrapper = ({ children, className }: MaxWrapperTypes) => {
    return (
        <div className={`w-full mx-auto max-w-[1368px] ${className}`}>
            {children}
        </div>
    );
};

export default MaxWrapper;