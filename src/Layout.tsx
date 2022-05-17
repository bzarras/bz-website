export function Layout(props: any) {
  console.log(props.children);
  return (
    <div className='container'>
      <div className="border border-[red] w-full lg:inline-block lg:w-64 align-top">
        {props.children[0]}
      </div>
      <div className="border border-[red] w-full lg:inline-block lg:max-w-xl align-top">
        {props.children[1]}
      </div>
    </div>
  );
}
