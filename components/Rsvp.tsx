import { Button } from "./ui/Button";
import { Input } from "./ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";

export default function RSVP() {
    return (
      <section className="py-12 px-4 bg-purple-50">
        <h2 className="text-xl font-semibold mb-4 text-center">RSVP</h2>
        <form className="flex flex-col gap-4 max-w-md mx-auto">
          <Input type="text" placeholder="Your name" />
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select an option" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="yes">Will attend</SelectItem>
              <SelectItem value="no">Can't make it</SelectItem>
            </SelectContent>
          </Select>
          <Button type="submit">Send RSVP</Button>
        </form>
      </section>
    );
  }