const menuArray = [{
  text: '首页',
  href: '/dashboard',
  icon: 'el-icon-location',
  leaf: true
}, {
  text: '权限管理',
  icon: 'el-icon-setting',
  href: '/sys',
  leaf: false,
  children: [
    {
      text: '用户管理',
      href: '/sys/user',
      icon: '',
      leaf: true
    },
    {
      text: '角色管理',
      href: '/sys/role',
      icon: '',
      leaf: true
    }, {
      text: '菜单管理',
      href: '/sys/menu',
      icon: '',
      leaf: true
    }
  ]
}]

var powerArray = [{
  name: '系统权限',
  icon: 'icon iconfont icon-quanxian-selected',
  id: 'root',
  children: [{
    name: '首页',
    url: 'dashboard',
    icon: 'el-icon-location',
    parentid: '',
    html: '',
    desc: '系统首页',
    type: 1,
    id: 1
  }, {
    name: '权限管理',
    icon: 'el-icon-setting',
    url: 'sys',
    type: 1,
    parentid: '',
    html: '',
    desc: '系统权限管理',
    id: 2,
    children: [
      {
        name: '用户管理',
        url: '/sys/user',
        icon: '',
        type: 1,
        parentid: '2',
        html: '',
        desc: '系统用户管理',
        id: 21,
        children: [{
          name: '用户管理新增',
          url: '',
          icon: '',
          type: 2,
          parentid: 21,
          html: '',
          desc: '用户管理新增',
          id: 211
        }, {
          name: '用户管理修改',
          url: '',
          icon: '',
          type: 2,
          parentid: 21,
          html: '',
          desc: '用户管理修改',
          id: 212
        }, {
          name: '用户管理删除',
          url: '',
          icon: '',
          type: 2,
          parentid: 21,
          html: '',
          desc: '用户管理删除',
          id: 213
        }]
      },
      {
        name: '角色管理',
        url: '/sys/role',
        icon: '',
        type: 1,
        parentid: '',
        html: '',
        desc: '系统角色管理',
        id: 22,
        children: [{
          name: '角色管理新增',
          url: '',
          icon: '',
          type: 2,
          parentid: 22,
          html: '',
          desc: '角色管理新增',
          id: 221
        }, {
          name: '角色管理修改',
          url: '',
          icon: '',
          type: 2,
          parentid: 22,
          html: '',
          desc: '角色管理修改',
          id: 222
        }, {
          name: '角色管理删除',
          url: '',
          icon: '',
          type: 2,
          parentid: 22,
          html: '',
          desc: '角色管理删除',
          id: 223
        }]
      }, {
        name: '菜单管理',
        url: '/sys/menu',
        icon: '',
        type: 1,
        parentid: '',
        html: '',
        desc: '系统菜单管理',
        id: 23,
        children: [{
          name: '菜单管理新增',
          url: '',
          icon: '',
          type: 2,
          parentid: 23,
          html: '',
          desc: '菜单管理新增',
          id: 231
        }, {
          name: '菜单管理修改',
          url: '',
          icon: '',
          type: 2,
          parentid: 23,
          html: '',
          desc: '菜单管理修改',
          id: 232
        }, {
          name: '菜单管理删除',
          url: '',
          icon: '',
          type: 2,
          parentid: 23,
          html: '',
          desc: '菜单管理删除',
          id: 233
        }]
      }
    ]
  }]
}]
export default { menuArray, powerArray }
