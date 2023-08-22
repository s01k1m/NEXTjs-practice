export default async function Read(props) {
  // 10초가 지나면 캐시를 리프레쉬한다 페이지로 리다이렉션이 되었을때 0으로 바꿔주자
  const resp = await fetch(
    process.env.NEXT_PUBLIC_API_URL + `topics/${props.params.id}`,
    {
      cache: "no-store",
    }
  );
  const topic = await resp.json();
  return (
    <>
      <h2>{topic.title}</h2>
      {topic.body}
    </>
  );
}
