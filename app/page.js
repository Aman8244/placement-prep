import Navbar from "@/components/Navbar";
import Roles from "@/components/Roles";

export default function Home() {
  return (
    <main>
      <Navbar/>
      <div className="bg-[#F5F7F8] min-h-[500px]">
        <div>
          <Roles/>
        </div>
      </div>
    </main>
  );
}
