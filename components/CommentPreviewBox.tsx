import { messages } from "@/lib/data";

export default function CommentPreviewBox() {
    return (
      <section className="py-12 px-4 bg-gray-50">
        <h2 className="text-xl font-semibold mb-4 text-center">Messages</h2>
        <div className="space-y-4 max-w-md mx-auto">
          {messages.map((msg, index) => (
            <div key={index} className="bg-white p-4 rounded shadow">
              {msg.text} - {msg.name}
            </div>
          ))}
        </div>
      </section>
    );
  }