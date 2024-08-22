import React, { useState } from 'react'
import { Button, Checkbox, Label, Select, Textarea, TextInput } from "flowbite-react";
const UploadBook = () => {
    const bookCategories = [
        "Fiction",
        'Non-Fiction',
        "Mistery",
        "Programming",
        "Science Fiction",
        "Horror",
        "Bibliography",
        "Autobiography",
        "History",
        "Self-help",
        "Business",
        "Children Books",
        "Travel"
    ];
    const [selectedBookCategory, setSelectedBookCategory] = useState(bookCategories[0]);
    const handleChangeSelectedValue = (event) => {
        console.log(event.target.value);
        setSelectedBookCategory(event.target.value)
    }
    const handleBookSubmit=(event)=>{
event.preventDefault();
const form=event.target;
const bookTitle=form.bookTitle.value;
const authorName=form.authorName.value;
const imageURL=form.authorName.value;
const category=form.category.value;
const bookDescription=form.bookDescription.value;
const bookPDFURL=form.bookPDFURL.value;
const bookObj={
    bookTitle,authorName,imageURL,category,bookDescription,bookPDFURL
}
console.log(bookObj);
fetch("http://localhost:5000/upload-book",{
    method:'POST',
    headers:{
        "Content-type":"application/json"
    },
    body:JSON.stringify(bookObj)
}).then(res=>res.json()).then(data=> {
    alert('book uploaded successfully')
    form.reset();
})
    }
    return (
        <div className='px-4 my-12'>
            <h2 className='mb-8 text-3xl font-bold'>Upload a Book</h2>
            <form className="flex  lg:w-[1180px] flex-col flex-wrap" onSubmit={handleBookSubmit}>
                {/* First Row */}
                <div className='flex gap-8'>
                    <div className='lg:w-1/2'>
                        <div className="mb-2 block">
                            <Label htmlFor="bookTitle" value="Book Title" />
                        </div>
                        <TextInput id="bookTitle" type="text" placeholder="Enter Book Title" name='bookTitle' required />
                    </div>

                    <div className='lg:w-1/2'>
                        <div className="mb-2 block">
                            <Label htmlFor="authorName" value="Author Name" />
                        </div>
                        <TextInput id="authorName" type="text" placeholder="Enter Athor Name" required name='authorName' />
                    </div>
                </div>
                {/* Second Row */}
                <div className='flex gap-8'>
                    <div className='lg:w-1/2'>
                        <div className="mb-2 block">
                            <Label htmlFor="imageURL" value="Book Image URL" />
                        </div>
                        <TextInput id="imageURL" type="text" placeholder="Book Image URL" name='imageURL' required />
                    </div>

                    <div className='lg:w-1/2'>
                        <div className="mb-2 block">
                            <Label htmlFor="inputState" value="Book Category" />
                        </div>
                        <Select id='inputState' name='category' className='w-full rounded' value={selectedBookCategory} onChange={handleChangeSelectedValue}>
                            {
                                bookCategories.map(bookcat => <option key={bookcat}>{bookcat}</option>)
                            }
                        </Select>
                    </div>
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="bookDescription" value="Book Description" />
                    </div>
                    <Textarea id="bookDescription" type="text" placeholder="Write your Book Description" name='bookDescription' required className='w-full' rows={6} />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="bookPDFURL" value="Book PDF URL" />
                    </div>
                    <TextInput id="bookPDFURL" type="text" placeholder="Book PDF URL" name='bookPDFURL' required className='w-full' rows={6} />
                </div>
                <Button type='submit' className='mt-5'>Upload Book</Button>
            </form>
        </div>
    )
}

export default UploadBook