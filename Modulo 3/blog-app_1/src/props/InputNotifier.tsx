export default function InputNotifier(props: any) {
  return <input type="text" onChange={e => props.onChangeText(e.target.value)} />;
}