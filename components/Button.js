// * COMPONENTS
import Link from 'next/link'
// * STYLES
// * CONTENT

const Button = ( props ) => {

    const label = props.label;
    const link = props.link;
    const style = props.style;
    const onClick = props.onClick;

  return (
    <button 
        className={style}
        onClick={onClick}
    >
      <Link
        href={link}
      >
        {label}
      </Link>
    </button>
  );
}


export default Button;