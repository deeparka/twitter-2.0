import { SearchIcon } from "@heroicons/react/outline";
import { TwitterTimelineEmbed } from "react-twitter-embed";

function Widgets() {
    return (
        <div className="mt-2 px-2 col-span-2 hidden lg:inline">
            {/* Search Box */}
            <div
                className="mt-2 flex items-center space-x-2 bg-gray-100
            p-3 rounded-full"
            >
                <SearchIcon className="h-5 w-5 text-gray-400" />
                <input
                    type="text"
                    placeholder="Search Twitter"
                    className="flex-1 bg-transparent outline-none"
                />
            </div>
            {/* Timeline of an account */}
            <TwitterTimelineEmbed
                sourceType="profile"
                screenName="Benzema"
                options={{ height: 1000 }}
            />
        </div>
    );
}

export default Widgets;
