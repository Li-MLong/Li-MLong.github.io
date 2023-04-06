
const state = {
  avatar: "", // 头像链接
  name: "", // 名字
  message: ["上海", "前端开发工程师"], // 个人信息
  mobileNo: "13849141247", // 手机号
  wechatNo: "l13849141247", // 微信号
  mailbox: "913563848@qq.com", // 邮箱
  sex: "男", // 性别
  birthday: "1998 / 09 / 14", // 生日
  //个人技能
  skills: [
    {
      type: "JavaScript", // 名称
      score: 10, // 分值(十分制)
    },
    {
      type: "Html",
      score: 10,
    },
    {
      type: "Css",
      score: 10,
    },
    {
      type: "Vue",
      score: 10,
    },
    {
      type: "小程序",
      score: 8,
    },
    {
      type: "React",
      score: 5,
    },
    {
      type: "Node.js",
      score: 5,
    },
    {
      type: "Jquery",
      score: 8,
    },
  ],
  // 学校情况
  schoolBadge: "", // 校徽链接
  school: {
    name: "郑州理工职业学院", // 学校名称
    year: "2018 - 2021", // 在校年月
    department: "信息工程系 | 计算机网络", // 院系
    content:
      "计算机专业，扎实的计算机功底；勤奋好学，喜欢不断提升自我，不断追求新技术。", // 说明
  },
  // 工作经历
  works: [
    {
      time: "2021/x - 2021/x",
      name: "前端开发工程师", // 工作名称
      company: "上海老虎玫瑰信息科技有限公司", // 公司名称
      site: "上海", // 公司地区
      title: "vue2、vue3、ruiyi框架、typescript", // 内容标题行(折叠行第一行)
      content:
        "1. 负责公司产品或项目 Web  前端研发,并配合产品进行页面的设计；<br />2. 负责 Web  或移动产品的前端 UI  的开发,确保在不同平台、设备、浏览器上均拥有良好的兼容性；<br />3. 持续的优化前端体验和页面响应速度，提升 web  界面的友好性和易用性；<br />4. 配合测试完成公司项目的测试、bug  修复、用户体验优化等工作。", // 工作内容(换行请使用<br />标签)
    },
    {
      time: "2019/x - 2021/x",
      name: "前端开发工程师",
      company: "郑州匠云网络科技有限公司",
      site: "郑州",
      title:
        "Vue、React、微信小程序、bootstrap、layui、jQuery",
      content:
        "1. 负责网站和手机端网页设计、专题页设计和网页制作工作；<br />2. 负责公司项目中的前端功能模块的开发和页面数据的渲染；<br />3. 配合 ui  对页面进行美化满足客户需求；<br />4. 配合后端其他人员完成项目的测试和一些功能的完善；<br />5. 使用第三方框架(layui,vant,element  等)对网页进行快速开发制作。",
    },
  ],
  // 个人作品(目前只支持三个)
  productions: [
    {
      href: "http://glw.a56.net", // 链接
      src: "", // 图片链接
      title: "glw仓储物流管理系统", // 标题
      content:
        "此系统是仓库内部WMS系统，主要是为了管理仓库内库位、出入库和库存相关数据，其中加入了物流运输、账单计算等功能，可以更方便的管理仓库，提⾼作业效率与资源利⽤率。", // 说明
    },
    {
      href: "http://sci-line.a56.net",
      src: "",
      title: "闪链医疗器械管理系统",
      content:
        "此系统主要功能是对医疗器械的仓库管理，通过对医疗器械数据信息的控制，实现医疗行业采购、库存、销售、售后的协同 。",
    },
    {
      href: "http://www.a56.net",
      src: "",
      title: "物流业务导航",
      content:
        "该项目主要是作为业务导航使用，可以使客户更方便快速跳转到需要的业务系统。",
    },
    {
      href: "",
      src: "",
      title: "立体图片展示",
      content:
        "练手小Demo，可三维立体的展示房间、城市等，可用于售房等业务，在网页端就可查看房型装修，十分方便。",
    },
  ],

}

const mutations = {
  UPDATE_NAME(state, name) {
    state.name = name;
  }
}

const actions = {
  updateName({ commit }, name) {
    commit('UPDATE_NAME', name);
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
};