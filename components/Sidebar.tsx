import Twitter from "../images/twitter.png";
import SidebarRow from "./SidebarRow";
import {
    BookmarkIcon,
    HomeIcon,
    HashtagIcon,
    BellIcon,
    MailIcon,
    CollectionIcon,
    UserIcon,
    DotsCircleHorizontalIcon,
} from "@heroicons/react/outline";

function Sidebar() {
    return (
        <div className="flex flex-col col-span-2 items-center px-4 md:items-start">
            <img
                className="h-10 w-10 m-3"
                src={Twitter.src}
                alt="Twitter.png"
            />
            <SidebarRow Icon={HomeIcon} title="Home" />
            <SidebarRow Icon={HashtagIcon} title="Explore" />
            <SidebarRow Icon={BellIcon} title="Notifications" />
            <SidebarRow Icon={MailIcon} title="Messages" />
            <SidebarRow Icon={BookmarkIcon} title="Bookmarks" />
            <SidebarRow Icon={CollectionIcon} title="Lists" />

            <SidebarRow Icon={UserIcon} title="Sign In" />

            <SidebarRow Icon={DotsCircleHorizontalIcon} title="More" />
        </div>
    );
}

export default Sidebar;
