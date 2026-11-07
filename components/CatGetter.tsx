interface CatGetterProps {
  width: number;
  height: number;
}

export default function CatGetter({ width, height }: CatGetterProps) {
  let builtSrc = "https://placecats.com/" + width + "/" + height + "?fit=fill";
    return (
   <article className="flex justifiy-center flex-col p-4 border-l-4 border-green-600 bg-gray-50 rounded ">
      <h2 className="text-xl font-bold mb-2 text-green-900 text-center">Look at this beautiful cat!</h2>
      <img src={builtSrc} alt="a beautiful cat who accepts two props!" className="max-w-[300px] h-auto" />
      <p className="text-gray-700 mb-3">He is {width} pixels wide and {height} pixels tall</p>
    </article>
  );
}