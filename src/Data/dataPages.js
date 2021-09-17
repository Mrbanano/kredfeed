export const AvatarData = {
  name: 'Alvaro',
  icon: 'https://lh3.googleusercontent.com/ogw/ADea4I46nxjOuj3Zvo2wKiQLhxhO2Yb8RUIESsA52-vX=s32-c-mo',
}
export const logoutData = {
  name: 'logout',
  icon: '/static/icons/logout.png',
  url: '#',
}
export const Companyinfo = {
  name: 'KredFeed',
  icon: './static/images/kredfeed.png',
  url: 'https://kredfeed.com/',
  ilustration: './static/images/ilustration.svg',
}

export const NavItems = [
  {
    name: 'Home',
    hrfe: '#',
    icon: './static/icons/home.png',
    status: 'disabled',
  },
  {
    name: 'info',
    hrfe: '/',
    icon: '/./static/icons/info.png',
    status: '',
  },
  {
    name: 'Notificaciones',
    hrfe: '#',
    icon: './static/icons/bell.png',
    status: 'disabled',
  },
  {
    name: 'configuraciones',
    hrfe: '#',
    icon: './static/icons/settings.png',
    status: 'disabled',
  },
]

export const Steps = [
  {
    name: 'General',
    label: 'General',
  },
  {
    name: 'Domicilio',
    label: 'Domicilio',
  },
  {
    name: 'Contacto',
    label: 'Contacto',
  },
  {
    name: 'Representante legal',
    label: 'Representante legal',
  },
  {
    name: 'Cuenta bancaria',
    label: 'Cuenta bancaria',
  },
  {
    name: 'Beneficiario',
    label: 'Beneficiario',
  },
]

export const statusStep = {
  ready: {
    name: 'ready',
    icon: './static/icons/status/done.svg',
  },
  actual: {
    name: 'actual',
    icon: './static/icons/status/actual.svg',
  },
  fail: {
    name: 'fail',
    icon: './static/icons/status/fail.svg',
  },
}
