export default function Search(props) {
  return (
    <div className="border-b-2 mx-2 h-[50px]">
      <input type="text" placeholder="Search by name" className="w-full h-full outline-none border-orange-400" onChange={e => props.setSearch(e.target.value)} />
    </div>
  );
}
