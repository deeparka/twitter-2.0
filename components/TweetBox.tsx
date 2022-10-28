import {
    EmojiHappyIcon,
    PhotographIcon,
    SearchCircleIcon,
    CalendarIcon,
    LocationMarkerIcon,
} from "@heroicons/react/outline";
import Face_Placeholder from "../images/face_placeholder.jpeg";

function TweetBox() {
    return (
        <div className="flex space-x-2 p-5">
            <img
                className="h-14 w-14 rounded-full mt-4 object-cover"
                src={Face_Placeholder.src}
                alt=""
            />

            <div className="flex flex-1 items-center pl-2">
                <form className="flex flex-1 flex-col">
                    <input
                        className="h-24 outline-none w-full text-xl placeholder:text-xl"
                        type="text"
                        placeholder="What's Happening?"
                    />
                    <div className="flex items-center">
                        <div className="flex space-x-2 text-twitter flex-1">
                            <PhotographIcon
                                className="h-5 w-5 cursor-pointer 
                            transition-transform duration-150 ease-out 
                            hover:scale-150"
                            />
                            <SearchCircleIcon className="h-5 w-5" />
                            <EmojiHappyIcon className="h-5 w-5" />
                            <CalendarIcon className="h-5 w-5" />
                            <LocationMarkerIcon className="h-5 w-5" />
                        </div>
                        <button
                            className="bg-twitter px-5 py-2 font-bold 
                        text-white rounded-full"
                        >
                            Tweet
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default TweetBox;
