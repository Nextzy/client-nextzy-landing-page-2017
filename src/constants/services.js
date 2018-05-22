import androidHover from '../images/icons/icon_android_hover.png'
import androidNormal from '../images/icons/icon_android_normal.png'
import appleHover from '../images/icons/icon_apple_hover.png'
import appleNormal from '../images/icons/icon_apple_normal.png'
import javaScriptHover from '../images/icons/icon_java_script_hover.png'
import javaScriptNormal from '../images/icons/icon_java_script_normal.png'

export const services = [
  {
    icon: {
      iconHover: androidHover,
      iconNormal: androidNormal
    },
    name: 'Android',
    description:
      'We use Lollipop features, Support multiple screen, Retrofit and Glide.'
  },
  {
    icon: {
      iconHover: appleHover,
      iconNormal: appleNormal
    },
    name: 'iOS',
    description: 'Swift and Objective-C.'
  },
  {
    icon: {
      iconHover: javaScriptHover,
      iconNormal: javaScriptNormal
    },
    name: 'Node.JS & Angular',
    description:
      'HTML5, CSS3, JavaScript, Node.JS, Angular, React.JS and MEAN Stack.'
  }
]
