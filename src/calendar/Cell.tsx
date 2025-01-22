
import clsx from 'clsx';

interface Props extends React.PropsWithChildren {
    isActive?: boolean;
    onClick?: () => void;
    className?:string;
    children?:React.ReactNode;
}


const Cell: React.FC<Props> = ({ isActive=false, onClick, className, children }) => {
    return <div 
    onClick={isActive ? undefined : onClick} 
    className={clsx("h-20 flex items-center justify-center border-l border-t border-b border-r",
        {
            "bg-blue-600 text-white":isActive
        }, 
        {
            "cursor-pointer hover:bg-gray-100 active:bg-gray-200": !isActive && onClick,
        }, className)}>{children}</div>
    
};

export default Cell;