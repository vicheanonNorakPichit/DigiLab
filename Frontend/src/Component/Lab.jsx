import React from "react";

function Lab() {
  return (
    <div className=" grid gap-4 grid-cols-2 items-center">
      <div className="collapse collapse-arrow bg-base-200 my-8">
        <input type="radio" name="my-accordion-2" checked="checked" />
        <div className="collapse-title text-xl font-medium">
          ជំពូកទី ១ មេរៀនទី ១
        </div>
        <div className="collapse-content">
          <p>ច្បាប់រក្សាម៉ាស់</p>
        </div>
      </div>

      <div className="collapse collapse-arrow bg-base-200 my-8">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          ជំពូកទី ២ មេរៀនទី ១
        </div>
        <div className="collapse-content">
          <p>ប្រតិកម្មរវាងលោហៈស័ង្កសី និងអាស៊ីតស៊ុលផួរិច</p>
        </div>
      </div>

      <div className="collapse collapse-arrow bg-base-200 my-8">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          ជំពូកទី ២ មេរៀនទី ១
        </div>
        <div className="collapse-content">
          <p>ប្រតិកម្មរវាងម្សៅដែកជាមួយសូលុយស្យុងអាស៊ីតក្លរីឌ្រិច</p>
        </div>
      </div>

      <div className="collapse collapse-arrow bg-base-200 my-8">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          ជំពូកទី ២ មេរៀនទី ១
        </div>
        <div className="collapse-content">
          <p>ប្រតិកម្មរវាងលោហៈអាលុយមីញ៉ូមជាមួយសូលុយស្យុងអាស៊ីតក្លរីឌ្រិចរាវ</p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200 my-8">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          ជំពូកទី ២ មេរៀនទី ២
        </div>
        <div className="collapse-content">
          <p>លក្ខណៈរូប និងលក្ខណៈគីមីរបស់លោហៈអាល់កាឡាំង</p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200 my-8">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          ជំពូកទី ២ មេរៀនទី ២
        </div>
        <div className="collapse-content">
          <p>លក្ខណៈរូប និងលក្ខណៈគីមីរបស់លោហៈទង់ដែងស្ថិតក្នុងក្រុមលោហៈឆ្លង</p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200 my-8">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          ជំពូកទី ៣ មេរៀនទី ១
        </div>
        <div className="collapse-content">
          <p>ការចម្លងចរន្ដអគ្គិសនីនៃសមាសធាតុអ៊ីយ៉ុង និងសមាសធាតុកូវ៉ាឡង់</p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200 my-8">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          ជំពូកទី ៣ មេរៀនទី ២
        </div>
        <div className="collapse-content">
          <p>ការរលាយចូលគ្នារវាងសារធាតុកូវ៉ាឡង់ និងសារធាតុអ៊ីយ៉ុង</p>
        </div>
      </div>
    </div>
  );
}

export default Lab;
