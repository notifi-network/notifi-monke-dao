import { DeviceMobileIcon } from '@heroicons/react/outline';
import { BellIcon, KeyIcon, MailIcon } from '@heroicons/react/solid';
import { makeStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import TelegramIcon from './TelegramIcon';
import { Typography } from '@material-ui/core';

const TagToIcon = {
  Email: MailIcon,
  NotifiCenter: BellIcon,
  Telegram: TelegramIcon,
  Text: DeviceMobileIcon,
  Wallet: KeyIcon,
};

const Tag = ({ channelName, tagWrapperClassName, iconClassName }) => {
  const Icon = TagToIcon[channelName];
  return (
    <div className={tagWrapperClassName}>
      <Icon className={iconClassName} />
      <Typography>{channelName}</Typography>
    </div>
  );
};

const NotificationBox = ({ channels, description, onSelect, name }) => {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <h2 className={classes.title}>{name}</h2>
      <div className={classes.iconsWrapper}>
        {channels.map((channel) => (
          <Tag
            key={channel}
            channelName={channel}
            tagWrapperClassName={classes.tagWrapper}
            iconClassName={classes.icon}
          />
        ))}
      </div>

      <Typography className={classes.description}>{description}</Typography>

      <div className="flex w-full justify-center pt-3">
        <Button
          variant="contained"
          className={classes.button}
          onClick={onSelect}
        >
          Use {name}
        </Button>
      </div>
    </div>
  );
};

export default NotificationBox;

const useStyles = makeStyles((theme) => ({
  wrapper: {
    width: '100%',
    padding: '0 1rem 1rem 1rem',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#194824',
    color: '#f3efcd',
    borderRadius: 10,
  },
  title: {
    borderBottom: '1px solid #246A35',
    paddingBottom: theme.spacing(2),
    color: 'white'
  },
  iconsWrapper: {
    display: 'flex',
  },
  icon: {
    float: 'left',
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  tagWrapper: {
    display: 'flex',
    borderRadius: 8,
    alignItems: 'center',
    padding: '5px 8px',
    color: '#f3efcd',
    backgroundColor: '#164120',
    marginRight: theme.spacing(1),
  },
  button: {
    color: '#184623',
    backgroundColor: '#f3efcd',
    '&:hover': {
      backgroundColor: '#f3efcd',
    }
  },
  description: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    color: "#f3efcd",
    fontFamily: "Space Grotesk",
    fontWeight: "500",
    fontSize: 18,
    whiteSpace: 'pre-wrap'
  }
}));
