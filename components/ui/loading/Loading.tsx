export const Loading: React.FC = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-white">
            <div className="relative w-16 h-16">
                <div className="absolute inset-0 border-4 border-gray-200 rounded-full"></div>
                <div className="absolute inset-0 border-4 border-transparent border-t-[#309C34] rounded-full animate-spin"></div>
            </div>
        </div>
    );
};

export default Loading;