import android_hover from '../images/icon_android_hover.png'
import android_normal from '../images/icon_android_normal.png'
import apple_hover from '../images/icon_apple_hover.png'
import apple_normal from '../images/icon_apple_normal.png'
import java_script_hover from '../images/icon_java_script_hover.png'
import java_script_normal from '../images/icon_java_script_normal.png'

const services = [
  {
    icon: {
      icon_hover: android_hover,
      icon_normal: android_normal
    },
    name: 'Android',
    description:
      'We use Lollipop features, Support multiple screen, Retrofit and Glide.'
  },
  {
    icon: {
      icon_hover: apple_hover,
      icon_normal: apple_normal
    },
    name: 'iOS',
    description: 'Swift and Objective-C.'
  },
  {
    icon: {
      icon_hover: java_script_hover,
      icon_normal: java_script_normal
    },
    name: 'Node.JS & Angular',
    description:
      'HTML5, CSS3, JavaScript, Node.JS, Angular, React.JS and MEAN Stack.'
  }
]

export { services }
