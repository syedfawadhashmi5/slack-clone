import React,{useState , useEffect} from "react";
import "./Sidebar.css";
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import CreateIcon from '@material-ui/icons/Create';
import SidebarOption from './SidebarOption';
import InsertCommentIcon from '@material-ui/icons/InsertComment';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import AppsIcon from '@material-ui/icons/Apps';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
import db from '../service/config'

function Sidebar() {

  const [channels, setchannels] = useState([])

  useEffect(() => {
    db.collection('rooms').onSnapshot(snapshot => (
      setchannels(
            snapshot.docs.map((doc)=>({
            id : doc.id,
            name : doc.data().name,
        }))
        )
        )
    );
}, []);

  return (
    <div className="sidebar">
      <div className="sidebar_header">
        <div className="sidebar_info">
          <h2>Slack Clone</h2>
          <h3>
            <FiberManualRecordIcon />
            Syed Fawad Hashmi
          </h3>
        </div>

        <CreateIcon />
      </div>
      <SidebarOption Icon={InsertCommentIcon} title="Threads"/>
        <SidebarOption Icon={InboxIcon} title="Mentions & reactions"/>
        <SidebarOption Icon={DraftsIcon} title="Saved Items"/>
        <SidebarOption Icon={BookmarkBorderIcon} title="Channel browser"/>
        <SidebarOption Icon={PeopleAltIcon} title="People & user groups"/>
        <SidebarOption Icon={AppsIcon} title="Apps"/>
        <SidebarOption Icon={FileCopyIcon} title="FileBrowser"/>
        <SidebarOption Icon={ExpandLessIcon} title="Show less"/>
        <hr/>
        <SidebarOption Icon={ExpandMoreIcon} title="Channels"  />
        <hr/>
        <SidebarOption Icon = {AddIcon} addChannelOption title = 'Add Channel' />

        {channels.map(channel => (
          <div key={channel.id}>
              <SidebarOption title={channel.name} id={channel.id} />
          </div>
        ))}
    </div>
  );
}

export default Sidebar;
