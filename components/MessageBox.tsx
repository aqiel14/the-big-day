import { Button } from "./ui/Button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

export default function MessageBox() {
    return (
        <section className="py-12 px-4 bg-white">
          <h2 className="text-xl font-semibold mb-4 text-center">Leave a Message</h2>
          <form className="flex flex-col gap-4 max-w-md mx-auto">
            <Input type="text" placeholder="Your name" />
            <Textarea placeholder="Your message" />
            <Button type="submit">Submit</Button>
          </form>
        </section>
      );
  }