export function ContentRow(props: any) {
  return (
    <div className='md:flex md:flex-row'>
      <div className="border border-[red] flex-none min-w-[256px] pb-4">
        {props.title}
      </div>
      <div className="border border-[red] grow max-w-3xl">
        {props.body}
      </div>
    </div>
  );
}
