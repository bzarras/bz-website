import { ContentRow } from './ContentRow';

export function Layout(props: any) {
  return (
    <div>
      {props.contents.map((content: any) => <ContentRow title={content.title} body={content.body} />)}
    </div>
  )
}
