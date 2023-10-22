type propsType = {
    label: string;
    onClick?: any;
  };
  
  export default function LMButton(props: propsType) {
    const { label, onClick } = props;
    return (
      <button
        onClick={onClick}
        style={{border:"none"}}
        className="rounded-full bg-danger p-2 text-white "
      >
        {label}
      </button>
    );
  }
  