import { useState, useEffect,type ReactNode } from "react"
import profilePhoto from "@/imports/____.png"
import resumePDF from "@/imports/___-_____Ai_____-1.pdf?url"
import houseLogo from "@/imports/house_logo.gif?url"
import artsLogo from "@/imports/arts_logo.jpeg"
import smartnoteImg from "@/imports/Screenshot_2026-09-02_at_16.42.05.png"
import img10 from "@/imports/image-10.png"
import img11 from "@/imports/image-11.png"
import img12 from "@/imports/image-12.png"
import img13 from "@/imports/image-13.png"
import img14 from "@/imports/image-14.png"
import img15 from "@/imports/image-15.png"
import img16 from "@/imports/image-16.png"
import img17 from "@/imports/image-17.png"
import img18 from "@/imports/image-18.png"
import img19 from "@/imports/image-19.png"
import img20 from "@/imports/image-20.png"
import img21 from "@/imports/image-21.png"
import img22 from "@/imports/image-22.png"
import msuMobile from "@/imports/image-11.png"
import pdfUploadHome from "@/imports/PDF_Upload_Homepage.pdf?url"
import professorHome from "@/imports/Professor_homepage.pdf?url"
import memoryTracker from "@/imports/Memory_Trakcer.pdf?url"
import frame7 from "@/imports/Frame_7.pdf?url"
import frame8 from "@/imports/Frame_8.pdf?url"
import frame9 from "@/imports/Frame_9.pdf?url"


// ─── Placeholder Icon Components ─────────────────────────────────────────────
const Globe = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const Sun = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
  </svg>
);

const RotateCcw = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
  </svg>
);

const Award = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
  </svg>
);

const CheckCircle2 = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

type Page = "home" | "work" | "resume" | "project"

// ─── Project Data ─────────────────────────────────────────────────────────────

interface InfoCard {
  number: string
  category: string
  title: string
  description: string
  icon: ReactNode
}

interface ContentBlock {
  type: "heading" | "body" | "tags" | "placeholder" | "image" | "image-pair" | "label" | "pdf" | "mode-cards" | "sn-section" | "info-cards"
  text?: string
  items?: string[]
  label?: string
  src?: string
  alt?: string
  small?: boolean
  modes?: {
    icon: string
    title: string
    subtitle: string
    desc: string
    color: string
  }[]
  cards?: InfoCard[]
  variant?: "hero" | "problems" | "upload" | "professor" | "memory" | "workflow"
  srcA?: string
  srcB?: string
  altA?: string
  altB?: string
}

interface Project {
  id: number
  title: string
  category: string
  role: string
  year: string
  description: string
  image: string
  imageAlt: string
  blocks: ContentBlock[]
}

const PROJECTS: Project[] = [
  {
    id: 1,
    title: "首都地区住房合作伙伴",
    category: "无障碍体验重构",
    role: "UX 研究员",
    year: "2024",
    description:
      "深入进行无障碍体验审计，主导了全局重新设计，确保所有群体都能包容性获取数字资源。",
    image: houseLogo,
    imageAlt: "Capital Area Housing Partnership 标志",
    blocks: [
      { type: "heading", text: "项目目标" },
      {
        type: "body",
        text: "研究客户网站存在的问题，并就改善无障碍性和提升用户界面体验提出切实可行的改进建议。",
      },
      { type: "image", src: img14, alt: "CAHP 现有网站截图（笔记本电脑展示）" },

      { type: "heading", text: "研究方法" },

      { type: "label", label: "W3 标记验证服务" },
      {
        type: "body",
        text: "通过 W3 标记验证服务检测，发现网站存在解析错误、属性不完整、多余结束标签、空白符错误、无效颜色语法等多项 HTML 问题。",
      },

      { type: "label", label: "无障碍性测试" },
      {
        type: "body",
        text: '无障碍评分为 75 分。网站链接"未能提供可识别文本"，违反了 WCAG A 级标准。标题顺序问题"为使用辅助技术的用户造成了障碍"。',
      },

      { type: "label", label: "WAVE 工具" },
      {
        type: "body",
        text: "对捐款页面应用 WAVE 工具后，发现 HTML 错误、字体大小错误、色彩对比度错误和结构元素错误等多个问题。",
      },

      { type: "heading", text: "发现问题与解决方案" },

      { type: "label", label: "问题一：标题层级不规范" },
      {
        type: "body",
        text: "网站标题层级存在跳级使用的情况，如直接使用 h5 而跳过了 h2、h3 等层级，导致屏幕阅读器无法正确解读页面结构。",
      },
      {
        type: "body",
        text: "解决方案：按照 h1 → h2 → h3 的正确顺序使用标题标签，确保页面结构的语义完整性。",
      },
      {
        type: "image-pair",
        srcA: img10,
        altA: "问题：h5 标签使用错误",
        srcB: img11,
        altB: "解决方案：正确的标题层级结构",
      },

      { type: "label", label: "问题二：HTML 解析错误与属性缺失" },
      {
        type: "body",
        text: "网站存在 CSS 解析错误（无效选择器语法）以及 img 元素缺少必需的 src 属性，这些问题会导致辅助技术用户遭遇渲染障碍。",
      },
      {
        type: "body",
        text: "解决方案：修正 CSS 选择器语法，并为所有图片元素补全 src 属性及路径。",
      },
      {
        type: "image-pair",
        srcA: img12,
        altA: "问题：CSS 解析错误与缺失 src 属性",
        srcB: img13,
        altB: "解决方案：修正 CSS 语法与补全图片路径",
      },

      {
        type: "label",
        label: "问题三：捐款页面对比度不足、布局混乱、支付流程不清晰",
      },
      {
        type: "body",
        text: "捐款页面色彩对比度不达标，内容排布杂乱，支付方式跳转路径不明确，影响用户完成捐款操作。",
      },
      {
        type: "body",
        text: "解决方案：在 Figma 中对捐款页面进行全面重新设计。",
      },

      { type: "heading", text: "用户画像" },
      {
        type: "body",
        text: "为确保设计方案以真实用户需求为中心，我们建立了核心用户画像 Cathy Johnson。她是一位 70 岁的退休女性，希望通过网站向住房援助项目捐款，但对数字技术并不熟悉，诉求是简单直觉的操作流程与清晰的无障碍界面。",
      },
      { type: "image", src: img15, alt: "用户画像：Cathy Johnson" },

      { type: "heading", text: "原型设计亮点" },
      {
        type: "body",
        text: "重新设计的捐款页面涵盖以下改进：修复导航栏色彩对比度、添加悬停状态与下拉菜单、嵌入支持一次性与月度捐款切换的捐款表单、整合 PayPal / 银行卡 / 信用卡多种支付方式，并加入隐私声明。",
      },
      { type: "image", src: img16, alt: "首页：现有网站 vs 线框重设计对比" },
      {
        type: "image",
        src: img17,
        alt: '"了解更多"页面：现有网站 vs 线框重设计对比',
      },
      {
        type: "image",
        src: img18,
        alt: "捐款入口页：现有网站 vs 线框重设计对比",
      },
      { type: "image", src: img19, alt: "重新设计后的线上捐款页面原型" },

      { type: "heading", text: "反思" },
      {
        type: "body",
        text: "这个项目让我深刻认识到，以用户为中心的设计理念对于构建一个真正有效的网站至关重要。通过研究无障碍问题并提出改进方案，我更加理解了设计决策对真实用户体验的深远影响。",
      },
    ],
  },
  {
    id: 2,
    title: "密西根州立大学艺术馆",
    category: "架构重构",
    role: "首席产品设计师",
    year: "2024",
    description:
      "数据驱动的全站架构重构，提升了艺术门户网站对大学生的吸引力与互动频次。",
    image: artsLogo,
    imageAlt: "MSU Eli Broad 艺术博物馆建筑外观",
    blocks: [
      {
        type: "heading",
        text: "项目概述",
      },
      {
        type: "body",
        text: "我们团队通过用户研究、原型设计和数据分析，对 Arts MSU 网站进行了系统性重新设计。我们分别为移动端和桌面端制作了 A/B 两版原型，通过 A/B 测试收集用户偏好，并利用可视化数据表达来指导重新设计决策。最终呈现展示了研究成果、原型设计、测试结果和核心洞察。",
      },
      {
        type: "heading",
        text: "研究阶段",
      },
      {
        type: "body",
        text: "我们首先通过用户访谈和问卷调研，收集用户需求、痛点和期望的定性与定量数据。同时分析了现有网站的结构和内容，识别可用性问题和用户旅程中的断点。主要发现包括：导航缺乏直觉性、视觉层级不一致。",
      },
      {
        type: "heading",
        text: "设计与原型",
      },
      {
        type: "body",
        text: "我们进行了 A/B 测试。首先制作 A 版原型，还原 Arts MSU 网站的现有结构和内容，作为与 B 版对比的基准。根据反馈优化并设计功能更完善、视觉更清晰的 B 版。",
      },
      {
        type: "image",
        src: img20,
        alt: "桌面端 A/B 测试：原始版 vs 新版导航设计对比",
      },
      {
        type: "image",
        src: undefined,
        alt: "移动端 A/B 测试：原始版 vs 原型版导航对比",
        small: true,
      },
      {
        type: "heading",
        text: "数据分析与结果",
      },
      {
        type: "body",
        text: '通过问卷收集用户反馈，评估两个版本在视觉偏好、导航难易度等维度上的表现。结果显示，超过半数用户认为新版"非常易于导航"，整体满意度显著提升。',
      },
      {
        type: "image",
        src: img22,
        alt: "用户测试数据：原型使用感受与导航难易度分析图表",
      },
      {
        type: "heading",
        text: "反思",
      },
      {
        type: "body",
        text: "在这个项目中，从原型设计到 A/B 测试和问卷收集，我们用最终数据不断优化设计。这让我深刻认识到反馈的重要性。通过向用户学习，理解他们的使用体验，我们能够根据真实需求做出适当的调整。将用户需求置于核心，才能让设计变得更合理、更具包容性、更实用。",
      },
    ],
  },
  {
    id: 3,
    title: "SmartNote 智能笔记",
    category: "智能教育助手",
    role: "产品设计师",
    year: "2023",
    description:
      "集成了 AI 动态思维导图与间隔重复算法，帮学生将非结构化课件高效转化为知识存量。",
    image: smartnoteImg,
    imageAlt: "SmartNote 应用界面展示",
    blocks: [
      { type: "heading", text: "项目概述" },
      {
        type: "body",
        text: "一款面向高中生、大学生和职场学习者的智能教育工具，将传统课件自动转化为可视化思维导图与个性化练习系统，让学习更高效、更有趣、更个性化。",
      },
      { type: "sn-section", variant: "hero" },
      { type: "heading", text: "问题发现" },
      {
        type: "body",
        text: "在与学生的研究访谈中，我们发现了三个反复出现的核心痛点：",
      },
      { type: "sn-section", variant: "problems" },

      { type: "heading", text: "设计执行" },
      {
        type: "body",
        text: "针对三大痛点，SmartNote 设计了三种核心模式，每种模式解决一个具体的学习障碍：",
      },
      { type: "sn-section", variant: "upload" },
      { type: "sn-section", variant: "professor" },
      { type: "sn-section", variant: "memory" },

      { type: "heading", text: "使用流程" },
      { type: "sn-section", variant: "workflow" },

      { type: "heading", text: "反思" },
      {
        type: "body",
        text:
          "这个项目让我更深入地思考如何将用户研究与设计执行紧密结合。通过聚焦主动回忆、间隔重复和视觉学习三大经过验证的学习方法，SmartNote 不仅解决了实际痛点，也让我认识到：好的产品设计，必须建立在对用户真实行为和学习科学的深刻理解之上。",
      },
    ],
  },

  {
    id: 4,
    title: "互动学习课程",
    category: "游戏化教学",
    role: "UX/UI Designer & 交互系统架构师",
    year: "2023",
    description:
      "为10岁儿童量身打造的实体空间与触控数字媒介融合课程系统。重构传统科学教育链路，将死记硬背的地理结论转换为触手可及的探究式空间实验室。",
    image:
      "https://images.unsplash.com/photo-1633098096956-afdc8bcc8552?w=1200&h=600&fit=crop&auto=format",
    imageAlt: "电脑屏幕上展示世界地图的数字化教学内容",
    blocks: [
      {
        type: "heading",
        text: "项目概述",
      },
      {
        type: "body",
        text: "为10岁儿童量身打造的实体空间与触控数字媒介融合课程系统。重构传统科学教育链路，将死记硬背的地理结论转换为触手可及的探究式空间实验室。",
      },
      {
        type: "mode-cards",
        modes: [
          {
            icon: "👤",
            title: "角色职责",
            subtitle: "ROLE",
            desc: "UX/UI Designer & 交互系统架构师 (负责全流程设计与原型验证)",
            color: "#faf9f6",
          },
          {
            icon: "⏱️",
            title: "周期与里程碑",
            subtitle: "TIMELINE",
            desc: "8 周周期 (深度调研、信息架构、认知模型重塑、动态高保真)",
            color: "#faf9f6",
          },
          {
            icon: "🖥️",
            title: "目标媒介环境",
            subtitle: "PLATFORM",
            desc: "实体课堂一体化交互式触控屏终端 (Interactive Kiosk) + 学生配套平板",
            color: "#faf9f6",
          },
          {
            icon: "🎓",
            title: "核心受众",
            subtitle: "AUDIENCE",
            desc: "10岁小学五年级学生 (Grade 5 Elementary) · 好奇心旺盛但注意力分散",
            color: "#faf9f6",
          },
        ]
      },
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1633098096956-afdc8bcc8552?w=1200&h=600&fit=crop&auto=format",
        alt: "物理交互大屏与学生触控终端双向协同系统",
      },
      {
        type: "heading",
        text: "了解用户：从学习痛点出发",
      },
      {
        type: "body",
        text: "在项目初期，我并没有直接开始设计界面，而是首先思考一个核心问题：如何让学生愿意主动开始学习，并在学习过程中持续保持兴趣？这个问题成为后续学习目标、内容组织以及交互方式设计的基础。",
      },
      {
        type: "label",
        label: "Jack (10岁) - 小学五年级学生",
      },
      {
        type: "body",
        text: "【行为习惯特征】日常生活高度熟悉iPad、Switch等数字触控产品；具备基础自主阅读与滑动试错经验，习惯手指直观拖拽而非文字指令。",
      },
      {
        type: "body",
        text: "【核心挫败痛点】面对教科书中密集的静态文字与繁冗名词难以维系超过5分钟的注意力；操作后若无即时且直观的物理级视觉反馈，便容易产生放弃挫折感。",
      },
      {
        type: "body",
        text: "【核心驱动激励】对具备可操纵性的3D模型有天然占有欲；渴望在自我探索中“发现隐藏规律”，极度推崇游戏化阶段通关认证带来的同侪即时成就感。",
      },
      {
        type: "heading",
        text: "明确学习目标：从“记忆”转向“理解”",
      },
      {
        type: "label",
        label: "传统模式：被动结论背诵",
      },
      {
        type: "body",
        text: "学生被告知“春温、夏热、秋凉、冬寒”以及“公转周期是365天”。面对倾角23.5度等抽象公式，仅能在试卷上机械匹配词条，缺乏三维时空对应关系。",
      },
      {
        type: "label",
        label: "交互模式：空间推导与模型构建",
      },
      {
        type: "body",
        text: "学生手动旋转地球仪倾角，动态观测直射光斑在北回归线与南回归线之间的位移，自主推导出“受光角度差异引发温度骤变”的科学物理本质。",
      },
      {
        type: "heading",
        text: "组织学习内容：建立循序渐进的学习路径",
      },
      {
        type: "mode-cards",
        modes: [
          {
            icon: "1️⃣",
            title: "认识地球",
            subtitle: "STAGE 01",
            desc: "外观认知与拟人名片档案，建立球体整体感官",
            color: "#faf9f6",
          },
          {
            icon: "2️⃣",
            title: "地球结构",
            subtitle: "STAGE 02",
            desc: "三维交互剖切观察地心构造（地壳、地幔、地核）",
            color: "#faf9f6",
          },
          {
            icon: "3️⃣",
            title: "季节变化",
            subtitle: "STAGE 04",
            desc: "手势拖曳公转轨道核心实验与地轴倾角演绎",
            color: "#faf9f6",
          },
          {
            icon: "4️⃣",
            title: "地区比较",
            subtitle: "STAGE 04",
            desc: "高低纬度现实气候对比，打通生活经验闭环",
            color: "#faf9f6",
          },
          {
            icon: "5️⃣",
            title: "知识测试",
            subtitle: "STAGE 05",
            desc: "情境化问答与勋章巩固，强化学习成就感",
            color: "#faf9f6",
          },
        ],
      },
      {
        type: "heading",
        text: "设计互动学习环境：让学生主动参与",
      },
      {
        type: "body",
        text: "屏幕不仅是显示器，更是连接实体教室与数字微缩宇宙的触觉操作台。通过拟人化的自我介绍与大圆角胶囊手势触控，迅速消除低龄学习者对天文学的距离感。",
      },
      {
        type: "heading",
        text: "视觉化表达：降低科学知识的理解难度",
      },
      {
        type: "body",
        text: "将繁冗的文字推导重构为同心圆剖面色彩高亮与物理参数对比（Structure of the Earth）。轻触右侧层级标签即可实时切换剖面状态，大幅提升儿童的信息接收效率。",
      },
      {
        type: "heading",
        text: "反思",
      },
      {
        type: "body",
        text: "这个项目的重点并不是简单地把纸质教材搬到数字屏幕上，而是重新思考儿童的认知规律，以及数字交互能够如何帮助他们更直观地理解自然科学知识。",
      },
    ],
  }
];

const InteractiveEarthSimulator = () => {
  const [activeTab, setActiveTab] = useState<'3d' | 'layers' | 'orbit' | 'quiz'>('3d');
  const [earthRotation, setEarthRotation] = useState(0);
  const [selectedLayer, setSelectedLayer] = useState<string>('crust');
  const [orbitAngle, setOrbitAngle] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [quizScore, setQuizScore] = useState<number | null>(null);
  const [userAnswers, setUserAnswers] = useState<{ [key: number]: number }>({});

  // Auto rotation effect
  useEffect(() => {
    let interval: any;
    if (isPlaying) {
      interval = setInterval(() => {
        setEarthRotation(prev => (prev + 0.5) % 360);
        setOrbitAngle(prev => (prev + 0.2) % 360);
      }, 30);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  const quizQuestions = [
    {
      q: "地球自转一周大约需要多长时间？",
      options: ["12小时", "24小时", "365天", "30天"],
      correct: 1
    },
    {
      q: "引起地球四季交替的主要物理原因是？",
      options: ["日地距离远近变化", "地轴倾角与公转", "月球引力拉扯", "太阳耀斑喷发"],
      correct: 1
    },
    {
      q: "地球的最内层构造称为什么？",
      options: ["地壳", "地幔", "地核", "大气层"],
      correct: 2
    }
  ];

  const handleSelectAnswer = (qIndex: number, optionIndex: number) => {
    setUserAnswers(prev => ({ ...prev, [qIndex]: optionIndex }));
  };

  const calculateQuiz = () => {
    let score = 0;
    quizQuestions.forEach((q, idx) => {
      if (userAnswers[idx] === q.correct) {
        score += 1;
      }
    });
    setQuizScore(score);
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-2xl text-white mb-12 overflow-hidden relative">
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-800">
        <div>
          <span className="text-xs font-semibold px-3 py-1 bg-indigo-500/20 text-indigo-400 rounded-full border border-indigo-500/30">
            互动实验室 DEMO
          </span>
          <h3 className="text-xl font-bold mt-2 flex items-center gap-2">
            <Globe className="w-5 h-5 text-indigo-400" />
            地球三维探究试操台
          </h3>
        </div>
        <div className="flex items-center gap-2 bg-slate-800/80 p-1.5 rounded-2xl border border-slate-700">
          <button
            onClick={() => setActiveTab('3d')}
            className={`px-4 py-2 rounded-xl text-xs font-medium transition-all ${
              activeTab === '3d' ? 'bg-indigo-600 text-white shadow-lg' : 'text-slate-400 hover:text-white'
            }`}
          >
            3D 概览
          </button>
          <button
            onClick={() => setActiveTab('layers')}
            className={`px-4 py-2 rounded-xl text-xs font-medium transition-all ${
              activeTab === 'layers' ? 'bg-indigo-600 text-white shadow-lg' : 'text-slate-400 hover:text-white'
            }`}
          >
            地层剖析
          </button>
          <button
            onClick={() => setActiveTab('orbit')}
            className={`px-4 py-2 rounded-xl text-xs font-medium transition-all ${
              activeTab === 'orbit' ? 'bg-indigo-600 text-white shadow-lg' : 'text-slate-400 hover:text-white'
            }`}
          >
            公转四季
          </button>
          <button
            onClick={() => setActiveTab('quiz')}
            className={`px-4 py-2 rounded-xl text-xs font-medium transition-all ${
              activeTab === 'quiz' ? 'bg-indigo-600 text-white shadow-lg' : 'text-slate-400 hover:text-white'
            }`}
          >
            探究小测
          </button>
        </div>
      </div>

      {/* Tab 1: 3D Globe Viewer */}
      {activeTab === '3d' && (
        <div className="relative h-96 bg-slate-950 rounded-2xl flex items-center justify-center overflow-hidden border border-slate-800/80">
          <div className="absolute inset-0 opacity-30 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:16px_16px]"></div>
          
          <div className="relative z-10 flex flex-col items-center justify-center">
            {/* Simulated Rotating 3D Globe */}
            <div 
              className="w-48 h-48 rounded-full relative shadow-[0_0_50px_rgba(59,130,246,0.3)] transition-transform duration-75 border-2 border-blue-400/30 flex items-center justify-center overflow-hidden"
              style={{
                background: 'radial-gradient(circle at 30% 30%, #60a5fa, #1d4ed8, #0f172a)',
                transform: `rotate(${earthRotation}deg)`
              }}
            >
              <div className="absolute w-full h-full rounded-full border-t border-white/20"></div>
              <div className="absolute w-28 h-44 rounded-full border border-white/20 transform -rotate-45"></div>
              <div className="absolute w-44 h-28 rounded-full border border-white/20 transform rotate-12"></div>
              <Globe className="w-24 h-24 text-white/40" />
            </div>

            <div className="mt-6 flex items-center gap-4">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 rounded-xl text-xs font-medium flex items-center gap-2 transition"
              >
                {isPlaying ? '暂停自转' : '开启自转'}
              </button>
              <button
                onClick={() => setEarthRotation(0)}
                className="p-2 bg-slate-800 hover:bg-slate-700 rounded-xl text-xs transition"
              >
                <RotateCcw className="w-4 h-4 text-slate-300" />
              </button>
            </div>
          </div>

          <div className="absolute bottom-4 left-4 right-4 bg-slate-900/90 backdrop-blur border border-slate-800 p-3 rounded-xl flex justify-between items-center text-xs text-slate-300">
            <span>实时自转角度: {Math.round(earthRotation)}°</span>
            <span>倾角: 23.5°</span>
            <span>周期: 24h</span>
          </div>
        </div>
      )}

      {/* Tab 2: Earth Layers */}
      {activeTab === 'layers' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center bg-slate-950 p-6 rounded-2xl border border-slate-800">
          <div className="flex justify-center relative">
            <div className="w-64 h-64 rounded-full border-4 border-slate-700 relative flex items-center justify-center bg-slate-900 overflow-hidden">
              {/* Outer Crust Layer */}
              <div 
                onClick={() => setSelectedLayer('crust')}
                className={`absolute inset-2 rounded-full border-8 cursor-pointer transition-all ${
                  selectedLayer === 'crust' ? 'border-amber-500 scale-105' : 'border-amber-700/50'
                }`}
              />
              {/* Mantle Layer */}
              <div 
                onClick={() => setSelectedLayer('mantle')}
                className={`absolute inset-10 rounded-full border-8 cursor-pointer transition-all ${
                  selectedLayer === 'mantle' ? 'border-orange-500 scale-105' : 'border-orange-700/50'
                }`}
              />
              {/* Core Layer */}
              <div 
                onClick={() => setSelectedLayer('core')}
                className={`absolute w-20 h-20 rounded-full cursor-pointer transition-all flex items-center justify-center text-xs font-bold ${
                  selectedLayer === 'core' ? 'bg-red-500 scale-110 shadow-[0_0_20px_rgba(239,68,68,0.8)]' : 'bg-red-700/60'
                }`}
              >
                地核
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div 
              onClick={() => setSelectedLayer('crust')}
              className={`p-4 rounded-xl border cursor-pointer transition ${
                selectedLayer === 'crust' ? 'bg-amber-500/10 border-amber-500' : 'bg-slate-900 border-slate-800'
              }`}
            >
              <h4 className="font-bold text-amber-400 flex items-center justify-between text-sm">
                地壳 (Crust)
                <span className="text-xs font-normal text-slate-400">厚度: 5-70 km</span>
              </h4>
              <p className="text-xs text-slate-300 mt-1">最外层的固体岩石壳，也是人类与所有陆地生命的栖息家园。</p>
            </div>

            <div 
              onClick={() => setSelectedLayer('mantle')}
              className={`p-4 rounded-xl border cursor-pointer transition ${
                selectedLayer === 'mantle' ? 'bg-orange-500/10 border-orange-500' : 'bg-slate-900 border-slate-800'
              }`}
            >
              <h4 className="font-bold text-orange-400 flex items-center justify-between text-sm">
                地幔 (Mantle)
                <span className="text-xs font-normal text-slate-400">厚度: ~2,900 km</span>
              </h4>
              <p className="text-xs text-slate-300 mt-1">充满高温硅酸盐岩石的中间层，内部具强烈的板块对流与岩浆活动。</p>
            </div>

            <div 
              onClick={() => setSelectedLayer('core')}
              className={`p-4 rounded-xl border cursor-pointer transition ${
                selectedLayer === 'core' ? 'bg-red-500/10 border-red-500' : 'bg-slate-900 border-slate-800'
              }`}
            >
              <h4 className="font-bold text-red-400 flex items-center justify-between text-sm">
                地核 (Core)
                <span className="text-xs font-normal text-slate-400">半径: ~3,480 km</span>
              </h4>
              <p className="text-xs text-slate-300 mt-1">极其炽热的中心区域，主要由铁和镍组成，形成了保护地球的宏大磁场。</p>
            </div>
          </div>
        </div>
      )}

      {/* Tab 3: Orbit & Seasons */}
      {activeTab === 'orbit' && (
        <div className="relative h-96 bg-slate-950 rounded-2xl flex items-center justify-center overflow-hidden border border-slate-800">
          <div className="absolute w-80 h-48 border border-dashed border-slate-700 rounded-[100%]"></div>
          
          {/* Sun */}
          <div className="w-16 h-16 bg-amber-400 rounded-full shadow-[0_0_50px_rgba(251,191,36,0.8)] flex items-center justify-center text-amber-950 font-black text-xs z-10">
            <Sun className="w-8 h-8 text-amber-900 animate-spin" />
          </div>

          {/* Earth Orbiting */}
          <div 
            className="absolute w-8 h-8 bg-blue-500 rounded-full shadow-lg border border-blue-300 flex items-center justify-center transition-all duration-100"
            style={{
              transform: `translate(${Math.cos((orbitAngle * Math.PI) / 180) * 160}px, ${Math.sin((orbitAngle * Math.PI) / 180) * 96}px)`
            }}
          >
            <div className="w-full h-0.5 bg-red-400/80 transform rotate-45"></div>
          </div>

          <div className="absolute top-4 left-4 bg-slate-900/80 p-3 rounded-xl border border-slate-800 text-xs space-y-1">
            <div className="font-semibold text-indigo-400">公转模拟视角</div>
            <div className="text-slate-300">倾角: 23.5° (四季变迁核心原因)</div>
            <div className="text-slate-400">公转位置: {Math.round(orbitAngle)}°</div>
          </div>
        </div>
      )}

      {/* Tab 4: Quiz */}
      {activeTab === 'quiz' && (
        <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 space-y-6">
          <h4 className="text-base font-bold text-white flex items-center gap-2">
            <Award className="w-5 h-5 text-amber-400" />
            探究式学习阶段小测 (Grade 5)
          </h4>

          {quizQuestions.map((q, qIndex) => (
            <div key={qIndex} className="bg-slate-900 p-4 rounded-xl border border-slate-800 space-y-3">
              <p className="text-sm font-medium text-slate-200">{qIndex + 1}. {q.q}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {q.options.map((opt, optIndex) => (
                  <button
                    key={optIndex}
                    onClick={() => handleSelectAnswer(qIndex, optIndex)}
                    className={`p-2.5 text-xs text-left rounded-lg transition border ${
                      userAnswers[qIndex] === optIndex
                        ? 'bg-indigo-600/20 border-indigo-500 text-indigo-300 font-medium'
                        : 'bg-slate-950 border-slate-800 text-slate-400 hover:bg-slate-800'
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>
          ))}

          <div className="pt-2 flex items-center justify-between">
            <button
              onClick={calculateQuiz}
              className="px-6 py-2.5 bg-indigo-600 hover:bg-indigo-500 font-medium rounded-xl text-xs text-white transition shadow-lg shadow-indigo-600/30"
            >
              提交评估
            </button>
            {quizScore !== null && (
              <div className="text-sm font-bold text-emerald-400 flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 px-4 py-2 rounded-xl">
                <CheckCircle2 className="w-4 h-4" />
                得分: {quizScore} / {quizQuestions.length}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );

};



// ─── SmartNote Section Components ────────────────────────────────────────────

function SnPhoneFrame({ children }: { children: ReactNode }) {
  return (
    <div
      className="relative bg-white rounded-[40px] border-[3px] border-[#d5cec5] shadow-xl overflow-hidden flex-shrink-0"
      style={{ width: "230px" }}
    >
      <div className="flex justify-center pt-4 pb-1">
        <div className="w-16 h-[16px] bg-[#1e1b16] rounded-full" />
      </div>
      <div className="px-3 pb-5">{children}</div>
    </div>
  )
}

function SnHeroPhone() {
  const modes = [
    {
      title: "上传模式",
      subtitle: "Upload Mode",
      bg: "linear-gradient(135deg,#ffffff 0%,#fff0ed 50%,#ffe3de 100%)",
      border: "#fcd3cb",
      iconBg: "#ccebe6",
    },
    {
      title: "教授模式",
      subtitle: "Professor Mode",
      bg: "linear-gradient(135deg,#eaf3ff 0%,#dbe9fe 100%)",
      border: "#bfdbfe",
      iconBg: "#bfdbfe",
    },
    {
      title: "记忆追踪",
      subtitle: "Memory Tracker",
      bg: "linear-gradient(135deg,#fffbeb 0%,#fef3c7 100%)",
      border: "#fde68a",
      iconBg: "#fde68a",
    },
  ]
  return (
    <div className="flex justify-center py-10">
      <div
        className="relative bg-white overflow-hidden flex-shrink-0"
        style={{
          width: 300,
          height: 600,
          borderRadius: 48,
          boxShadow: "0 32px 64px -16px rgba(0,0,0,0.18)",
          border: "2px solid #e0dbd3",
        }}
      >
        {/* Dynamic Island */}
        <div
          className="absolute left-1/2 -translate-x-1/2 bg-[#1e1b16] rounded-full z-10"
          style={{ top: 18, width: 88, height: 26 }}
        />
        {/* Screen */}
        <div className="absolute inset-0 pt-14 px-5 pb-6 flex flex-col">
          {/* Header */}
          <div className="flex justify-between items-start mb-6">
            <div>
              <div className="font-bold text-[#1e1b16] text-lg flex items-center gap-1.5">
                你好，同学 <span>👋</span>
              </div>
              <div className="text-[#7a6e60] text-xs mt-0.5">
                准备好专注学习了！
              </div>
            </div>
            {/* Person icon */}
            <div className="w-9 h-9 rounded-full bg-[#e8e0d8] flex items-center justify-center flex-shrink-0">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#8b6f5e"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </div>
          </div>
          {/* Mode cards */}
          <div className="flex flex-col gap-3">
            {modes.map((m, i) => (
              <div
                key={i}
                style={{
                  background: m.bg,
                  border: `1px solid ${m.border}`,
                  borderRadius: 18,
                  padding: "16px 14px",
                  display: "flex",
                  alignItems: "center",
                  gap: 14,
                }}
              >
                <div
                  style={{
                    width: 34,
                    height: 34,
                    borderRadius: 10,
                    backgroundColor: m.iconBg,
                    flexShrink: 0,
                  }}
                />
                <div>
                  <div
                    style={{
                      fontSize: "0.9rem",
                      fontWeight: 700,
                      color: "#18181b",
                    }}
                  >
                    {m.title}
                  </div>
                  <div
                    style={{
                      fontSize: "0.65rem",
                      color: "#8b6f5e",
                      marginTop: 1,
                    }}
                  >
                    {m.subtitle}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function SnUploadScreen() {
  return (
    <div
      className="text-[#111111] pt-1"
      style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}
    >
      {/* Header */}
      <div style={{ marginBottom: 16, paddingLeft: 2 }}>
        <div
          style={{
            fontSize: "1rem",
            fontWeight: 800,
            color: "#111111",
            letterSpacing: "-0.02em",
            display: "flex",
            alignItems: "center",
            gap: 5,
          }}
        >
          你好，同学 <span>👋</span>
        </div>
        <div style={{ fontSize: "0.7rem", color: "#9e9e9e", marginTop: 3 }}>
          准备好专注学习了！
        </div>
      </div>
      {/* Upload box */}
      <div
        style={{
          backgroundColor: "#f4f4f6",
          borderRadius: 16,
          padding: "10px 14px",
          textAlign: "center",
          fontSize: "0.75rem",
          color: "#a1a1aa",
          marginBottom: 18,
          border: "1px solid #eaeaea",
        }}
      >
        在此上传文件 ↑
      </div>
      {/* Past Files header */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 10,
          paddingLeft: 2,
          paddingRight: 2,
        }}
      >
        <span
          style={{
            fontSize: "0.85rem",
            fontWeight: 800,
            color: "#111111",
            letterSpacing: "-0.01em",
          }}
        >
          历史文件
        </span>
        <span style={{ fontSize: "0.65rem", color: "#a1a1aa" }}>查看全部</span>
      </div>
      {/* Filter tabs */}
      <div
        style={{ display: "flex", gap: 12, marginBottom: 14, paddingLeft: 2 }}
      >
        <span
          style={{
            backgroundColor: "#1c1c1e",
            color: "#fff",
            fontSize: "0.65rem",
            fontWeight: 700,
            padding: "4px 12px",
            borderRadius: 12,
          }}
        >
          PDF
        </span>
        <span style={{ fontSize: "0.7rem", color: "#b0b0b8" }}>PPT</span>
        <span style={{ fontSize: "0.7rem", color: "#b0b0b8" }}>讲座</span>
      </div>
      {/* Cards grid */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
        <div
          style={{
            background: "linear-gradient(135deg,#4edbd4 0%,#3bbdb6 100%)",
            borderRadius: 16,
            padding: "12px 10px",
            height: 130,
            color: "#fff",
            boxSizing: "border-box",
          }}
        >
          <div style={{ fontSize: "0.7rem", fontWeight: 700, lineHeight: 1.3 }}>
            统计学习
          </div>
          <div style={{ fontSize: "0.6rem", opacity: 0.85, marginTop: 4 }}>
            f(X) = β₀ + β₁X
          </div>
        </div>
        <div
          style={{
            background: "linear-gradient(135deg,#eeeeee 0%,#e3e3e6 100%)",
            borderRadius: 16,
            padding: "12px 10px",
            height: 130,
            boxSizing: "border-box",
          }}
        >
          <div
            style={{
              fontSize: "0.7rem",
              fontWeight: 700,
              lineHeight: 1.3,
              color: "#222",
            }}
          >
            第4章笔记
          </div>
          <div style={{ fontSize: "0.6rem", color: "#888", marginTop: 4 }}>
            矩阵分解...
          </div>
        </div>
      </div>
    </div>
  )
}

function SnProfessorScreen() {
  return (
    <div className="text-[#1e1b16] pt-2">
      <p className="font-bold text-sm mb-0.5">教授模式</p>
      <p className="text-[10px] text-[#7a6e60] mb-3">上传文件生成练习题</p>
      <div className="border border-[#e5ddd0] rounded-xl px-3 py-2 text-[10px] text-[#7a6e60] mb-3 bg-[#faf9f6]">
        上传文件 ↑
      </div>
      <p className="text-xs font-semibold mb-2">生成的练习题</p>
      <div className="space-y-2">
        <div className="border border-[#e5ddd0] rounded-xl p-3">
          <span className="text-[9px] bg-red-100 text-red-500 px-2 py-0.5 rounded-full font-semibold">
            困难
          </span>
          <p className="text-[10px] text-[#1e1b16] mt-1.5 leading-snug">
            请解释统计学习中的偏差-方差权衡。
          </p>
        </div>
        <div className="border border-[#e5ddd0] rounded-xl p-3">
          <span className="text-[9px] bg-green-100 text-green-600 px-2 py-0.5 rounded-full font-semibold">
            中等
          </span>
          <p className="text-[10px] text-[#1e1b16] mt-1.5 leading-snug">
            Pr(Y=k|X=x) 在分类中代表什么？
          </p>
        </div>
      </div>
      <div className="mt-3 bg-[#1e1b16] rounded-xl py-2 text-center">
        <span className="text-white text-[10px]">生成更多 →</span>
      </div>
    </div>
  )
}

function SnMemoryScreen() {
  return (
    <div className="text-[#1e1b16] pt-2">
      <div className="flex justify-between items-start mb-3">
        <div>
          <p className="font-bold text-sm">你好，同学 👋</p>
          <p className="text-[10px] text-[#7a6e60]">准备好专注了！</p>
        </div>
        <div className="w-8 h-8 rounded-full bg-[#e8e0d8] flex items-center justify-center flex-shrink-0">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#8b6f5e"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
        </div>
      </div>
      <p className="text-xs font-semibold text-center mb-3">学习分析</p>
      <div className="flex justify-center mb-3">
        <svg width="110" height="110" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r="38"
            fill="none"
            stroke="#e5ddd0"
            strokeWidth="10"
          />
          <circle
            cx="50"
            cy="50"
            r="38"
            fill="none"
            stroke="#5bc8b0"
            strokeWidth="10"
            strokeDasharray="170 69"
            strokeDashoffset="25"
            strokeLinecap="round"
          />
          <circle
            cx="50"
            cy="50"
            r="26"
            fill="none"
            stroke="#e5ddd0"
            strokeWidth="8"
          />
          <circle
            cx="50"
            cy="50"
            r="26"
            fill="none"
            stroke="#6b8fcc"
            strokeWidth="8"
            strokeDasharray="102 61"
            strokeDashoffset="25"
            strokeLinecap="round"
          />
          <circle
            cx="50"
            cy="50"
            r="15"
            fill="none"
            stroke="#e5ddd0"
            strokeWidth="7"
          />
          <circle
            cx="50"
            cy="50"
            r="15"
            fill="none"
            stroke="#f0a050"
            strokeWidth="7"
            strokeDasharray="43 51"
            strokeDashoffset="25"
            strokeLinecap="round"
          />
        </svg>
      </div>
      <div className="flex justify-around text-center">
        {[
          ["#5bc8b0", "78%", "已掌握"],
          ["#6b8fcc", "62%", "进行中"],
          ["#f0a050", "45%", "待复习"],
        ].map(([c, p, l], i) => (
          <div key={i}>
            <div
              className="w-2.5 h-2.5 rounded-full mx-auto mb-1"
              style={{ background: c }}
            />
            <p className="text-[11px] font-bold">{p}</p>
            <p className="text-[9px] text-[#7a6e60]">{l}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

function SnFeaturePhone({
  variant,
  color,
}: {
  variant: "upload" | "professor" | "memory"
  color: string
}) {
  const phoneShell = {
    width: 220,
    height: 440,
    borderRadius: 40,
    border: "2px solid #e0dbd3",
    background: "#ffffff",
    boxShadow: "0 20px 48px -12px rgba(0,0,0,0.14)",
    position: "relative" as const,
    overflow: "hidden" as const,
    flexShrink: 0,
  }
  const island = {
    position: "absolute" as const,
    top: 14,
    left: "50%",
    transform: "translateX(-50%)",
    width: 72,
    height: 20,
    backgroundColor: "#1e1b16",
    borderRadius: 12,
    zIndex: 10,
  }
  const inner = {
    position: "absolute" as const,
    inset: 0,
    paddingTop: 44,
    paddingLeft: 14,
    paddingRight: 14,
    paddingBottom: 14,
    display: "flex",
    flexDirection: "column" as const,
    boxSizing: "border-box" as const,
  }

  if (variant === "upload") {
    return (
      <div style={phoneShell}>
        <div style={island} />
        <div style={inner}>
          <div
            style={{
              fontSize: "0.85rem",
              fontWeight: 800,
              color: "#1e1b16",
              marginBottom: 2,
              display: "flex",
              alignItems: "center",
              gap: 6,
            }}
          >
            你好，同学 <span>👋</span>
          </div>
          <div
            style={{ fontSize: "0.62rem", color: "#9e9e9e", marginBottom: 14 }}
          >
            准备好专注学习了！
          </div>
          <div
            style={{
              background: "#f4f4f6",
              borderRadius: 14,
              padding: "10px",
              textAlign: "center",
              fontSize: "0.65rem",
              color: "#a1a1aa",
              marginBottom: 16,
              border: "1px solid #eaeaea",
            }}
          >
            上传文件 ↑
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 10,
            }}
          >
            <span
              style={{ fontSize: "0.72rem", fontWeight: 800, color: "#1e1b16" }}
            >
              历史文件
            </span>
            <span style={{ fontSize: "0.6rem", color: "#c7c7cc" }}>
              查看全部
            </span>
          </div>
          <div style={{ display: "flex", gap: 8, marginBottom: 12 }}>
            <span
              style={{
                background: "#1e1b16",
                color: "#fff",
                fontSize: "0.6rem",
                fontWeight: 700,
                padding: "3px 10px",
                borderRadius: 10,
              }}
            >
              PDF
            </span>
            <span
              style={{
                fontSize: "0.6rem",
                color: "#b0b0b8",
                padding: "3px 6px",
              }}
            >
              PPT
            </span>
            <span
              style={{
                fontSize: "0.6rem",
                color: "#b0b0b8",
                padding: "3px 6px",
              }}
            >
              录音
            </span>
          </div>
          <div
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}
          >
            <div
              style={{
                background: `linear-gradient(135deg, ${color} 0%, ${color}bb 100%)`,
                borderRadius: 14,
                padding: 10,
                aspectRatio: "3/4",
                color: "#fff",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  fontSize: "0.62rem",
                  fontWeight: 700,
                  lineHeight: 1.3,
                }}
              >
                统计学习
              </div>
              <div style={{ fontSize: "0.5rem", opacity: 0.85, marginTop: 4 }}>
                f(X) = β₀ + β₁X
              </div>
            </div>
            <div
              style={{
                background: "#f2f2f7",
                borderRadius: 14,
                padding: 10,
                aspectRatio: "3/4",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  fontSize: "0.62rem",
                  fontWeight: 700,
                  lineHeight: 1.3,
                  color: "#1e1b16",
                }}
              >
                第四章笔记
              </div>
              <div
                style={{ fontSize: "0.5rem", color: "#8e8e93", marginTop: 4 }}
              >
                矩阵分解...
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (variant === "professor") {
    const questions = [
      {
        q: "回归分析中，R² 的含义是？",
        opts: ["解释方差比例", "预测误差", "样本大小", "相关系数"],
      },
      {
        q: "以下哪项会导致多重共线性？",
        opts: ["高度相关预测变量", "小样本", "非正态分布", "异方差"],
      },
    ]
    return (
      <div style={phoneShell}>
        <div style={island} />
        <div style={inner}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 12,
            }}
          >
            <span
              style={{ fontSize: "0.72rem", fontWeight: 800, color: "#1e1b16" }}
            >
              练习题
            </span>
            <span
              style={{
                background: `${color}22`,
                color,
                fontSize: "0.55rem",
                fontWeight: 700,
                padding: "3px 8px",
                borderRadius: 8,
              }}
            >
              教授模式
            </span>
          </div>
          {questions.map((item, qi) => (
            <div
              key={qi}
              style={{
                background: "#f8f6f2",
                borderRadius: 14,
                padding: 10,
                marginBottom: 10,
              }}
            >
              <div
                style={{
                  fontSize: "0.62rem",
                  fontWeight: 700,
                  color: "#1e1b16",
                  marginBottom: 8,
                  lineHeight: 1.4,
                }}
              >
                {item.q}
              </div>
              {item.opts.map((o, oi) => (
                <div
                  key={oi}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                    marginBottom: 5,
                  }}
                >
                  <div
                    style={{
                      width: 14,
                      height: 14,
                      borderRadius: 7,
                      border: `1.5px solid ${oi === 0 ? color : "#d5cec5"}`,
                      background: oi === 0 ? `${color}22` : "transparent",
                      flexShrink: 0,
                    }}
                  />
                  <span
                    style={{
                      fontSize: "0.55rem",
                      color: oi === 0 ? color : "#7a6e60",
                      fontWeight: oi === 0 ? 600 : 400,
                    }}
                  >
                    {o}
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    )
  }

  // memory
  const days = ["一", "二", "三", "四", "五", "六", "日"]
  const scores = [60, 75, 55, 85, 70, 90, 80]
  const maxScore = 90
  return (
    <div style={phoneShell}>
      <div style={island} />
      <div style={inner}>
        <div
          style={{
            fontSize: "0.72rem",
            fontWeight: 800,
            color: "#1e1b16",
            marginBottom: 2,
          }}
        >
          记忆追踪
        </div>
        <div
          style={{ fontSize: "0.58rem", color: "#9e9e9e", marginBottom: 14 }}
        >
          本周复习进度
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            gap: 6,
            height: 80,
            marginBottom: 14,
          }}
        >
          {scores.map((s, i) => (
            <div
              key={i}
              style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 4,
              }}
            >
              <div
                style={{
                  width: "100%",
                  borderRadius: 6,
                  background: i === 5 ? color : `${color}44`,
                  height: `${(s / maxScore) * 70}px`,
                }}
              />
              <span style={{ fontSize: "0.45rem", color: "#9e9e9e" }}>
                {days[i]}
              </span>
            </div>
          ))}
        </div>
        {[
          { label: "统计学习", pct: 82, due: "今天" },
          { label: "第四章笔记", pct: 55, due: "明天" },
          { label: "微积分基础", pct: 34, due: "后天" },
        ].map((item, i) => (
          <div key={i} style={{ marginBottom: 10 }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: 4,
              }}
            >
              <span
                style={{
                  fontSize: "0.6rem",
                  fontWeight: 600,
                  color: "#1e1b16",
                }}
              >
                {item.label}
              </span>
              <span style={{ fontSize: "0.55rem", color, fontWeight: 600 }}>
                复习 {item.due}
              </span>
            </div>
            <div
              style={{
                height: 5,
                borderRadius: 3,
                background: "#f0ebe3",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  height: "100%",
                  borderRadius: 3,
                  background: `linear-gradient(90deg, ${color} 0%, ${color}99 100%)`,
                  width: `${item.pct}%`,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function SmartNoteSection({
  variant,
}: {
  variant: "hero" | "problems" | "upload" | "professor" | "memory" | "workflow"
}) {
  if (variant === "hero") {
    return <SnHeroPhone />
  }
  const base = "rounded-2xl my-4 overflow-hidden"

  if (variant === "problems") {
    return (
      <div className={`${base} p-8 grid grid-cols-3 gap-8 bg-[#f2ede5]`}>
        {[
          {
            icon: "📚",
            title: "信息过载",
            desc: "密集的幻灯片、冗长的录音、厚重的教材——一切积压的速度快过你能吸收的速度。",
          },
          {
            icon: "⏱️",
            title: "时间永远不够",
            desc: "每周把不同格式的笔记手动整理成可用的东西，耗掉大量宝贵时间。",
          },
          {
            icon: "🎯",
            title: "千篇一律不适用",
            desc: "通用工具无法适应教授的出题风格，也无法匹配你自己的学习偏好。",
          },
        ].map((p, i) => (
          <div key={i}>
            <div className="text-3xl mb-4">{p.icon}</div>
            <h3 className="text-[#1e1b16] font-semibold text-sm mb-2 font-[family-name:var(--font-sans)]">
              {p.title}
            </h3>
            <p className="text-[#7a6e60] text-xs leading-relaxed font-[family-name:var(--font-sans)] font-light">
              {p.desc}
            </p>
          </div>
        ))}
      </div>
    )
  }

  const sections = {
    upload: {
      badge: "上传模式",
      badgeColor: "#3aada3",
      heading: (
        <>
          上传 PDF，
          <br />
          获得思维导图。
        </>
      ),
      desc: "上传任意课程材料——PDF、PPT 或音频——SmartNote 即时生成围绕核心概念构建的可视化思维导图。",
      bullets: [
        "支持 PDF、PPT 及讲座录音",
        "三种思维导图格式：网格、气泡、树状",
        "一键切换不同风格重新生成",
      ],
    },
    professor: {
      badge: "教授模式",
      badgeColor: "#6b8fcc",
      heading: (
        <>
          与教授出题风格
          <br />
          高度匹配的练习题。
        </>
      ),
      desc: "SmartNote 分析教授的课程材料，生成精准匹配其题型格式、词汇风格和难度曲线的练习题。",
      bullets: [
        "AI 精准匹配每位教授的出题规律",
        "每个主题提供多种难度级别",
        "每道题即时反馈与详细解析",
      ],
    },
    memory: {
      badge: "记忆追踪",
      badgeColor: "#c4853a",
      heading: (
        <>
          在最佳时机复习，
          <br />
          每一次都精准。
        </>
      ),
      desc: "记忆追踪器采用间隔重复——最有科学依据的学习技术——在恰好合适的时间节点安排复习，实现长期记忆留存。",
      bullets: [
        "基于科学的间隔重复智能提醒",
        "跨文档的可视化掌握度追踪",
        "根据记忆表现自适应调整计划",
      ],
    },
  }

  if (variant === "upload" || variant === "professor" || variant === "memory") {
    const s = sections[variant]
    return (
      <div
        className={`${base} p-10 border border-[#e5ddd0] bg-[#faf9f6] flex items-center gap-12 flex-wrap`}
      >
        {/* Left: text */}
        <div className="flex-1 min-w-[260px]">
          <div
            className="inline-flex items-center rounded-full px-3 py-1 mb-6"
            style={{
              backgroundColor: `${s.badgeColor}14`,
              border: `1px solid ${s.badgeColor}55`,
            }}
          >
            <span
              className="text-[10px] font-bold tracking-widest uppercase font-[family-name:var(--font-sans)]"
              style={{ color: s.badgeColor }}
            >
              {s.badge}
            </span>
          </div>
          <h2
            className="font-[family-name:var(--font-serif)] text-[#1e1b16] mb-5 leading-tight"
            style={{
              fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)",
              letterSpacing: "-0.02em",
            }}
          >
            {s.heading}
          </h2>
          <p className="text-[#7a6e60] text-sm leading-relaxed mb-7 font-[family-name:var(--font-sans)] font-light">
            {s.desc}
          </p>
          <div className="h-px bg-[#e5ddd0] mb-7" />
          <ul className="space-y-4">
            {s.bullets.map((t, i) => (
              <li
                key={i}
                className="flex items-start gap-3 font-[family-name:var(--font-sans)]"
              >
                <span
                  className="text-sm font-bold flex-shrink-0 mt-0.5"
                  style={{ color: s.badgeColor }}
                >
                  ✦
                </span>
                <span className="text-[#7a6e60] text-sm leading-relaxed">
                  {t}
                </span>
              </li>
            ))}
          </ul>
        </div>
        {/* Right: phone mockup */}
        <div className="flex-shrink-0 flex justify-center">
          <SnFeaturePhone variant={variant} color={s.badgeColor} />
        </div>
      </div>
    )
  }

  if (variant === "workflow") {
    return (
      <div className={`${base} p-8 bg-[#f2ede5]`}>
        <p className="text-xs font-bold tracking-widest uppercase text-[#8b6f5e] mb-1 font-[family-name:var(--font-sans)]">
          简单工作流程
        </p>
        <h2 className="font-[family-name:var(--font-serif)] text-[#1e1b16] text-2xl mb-8 leading-snug">
          三步，学得更少，记得更多。
        </h2>
        <div className="grid grid-cols-3 gap-4">
          {[
            {
              n: "01",
              c: "#3aada3",
              t: "上传你的材料",
              d: "拖入任意 PDF、PPT 或讲座录音，SmartNote 即刻解析内容。",
            },
            {
              n: "02",
              c: "#6b8fcc",
              t: "选择你的格式",
              d: "选取思维导图风格——结构化网格、气泡节点或层级树状——匹配你的思维方式。",
            },
            {
              n: "03",
              c: "#c4853a",
              t: "专注投入，深度复习",
              d: "配合 AI 生成的练习题进行练习，让记忆追踪器安排最优的复习时间。",
            },
          ].map((s, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-5 border border-[#e5ddd0]"
            >
              <p
                className="font-bold text-2xl mb-3 font-[family-name:var(--font-serif)]"
                style={{ color: s.c }}
              >
                {s.n}
              </p>
              <h3 className="text-[#1e1b16] font-semibold text-sm mb-1.5 font-[family-name:var(--font-sans)]">
                {s.t}
              </h3>
              <p className="text-[#7a6e60] text-xs leading-relaxed font-[family-name:var(--font-sans)] font-light">
                {s.d}
              </p>
            </div>
          ))}
        </div>
      </div>
    )
  }

  return null
}

// ─── Shared Arrow Icon ────────────────────────────────────────────────────────

function ArrowLeft() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="19" y1="12" x2="5" y2="12" />
      <polyline points="12 19 5 12 12 5" />
    </svg>
  )
}

function ArrowRight() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  )
}

// ─── Nav ──────────────────────────────────────────────────────────────────────

function Nav({
  page,
  setPage,
  setProjectId,
}: {
  page: Page
  setPage: (p: Page) => void
  setProjectId: (id: number | null) => void
}) {
  const [menuOpen, setMenuOpen] = useState(false)

  const links: { label: string; key: Page; icon: ReactNode }[] = [
    {
      label: "首页",
      key: "home",
      icon: (
        <svg
          width="15"
          height="15"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
      ),
    },
    {
      label: "作品",
      key: "work",
      icon: (
        <svg
          width="15"
          height="15"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="3" y="3" width="7" height="7" />
          <rect x="14" y="3" width="7" height="7" />
          <rect x="14" y="14" width="7" height="7" />
          <rect x="3" y="14" width="7" height="7" />
        </svg>
      ),
    },
    {
      label: "简历",
      key: "resume",
      icon: (
        <svg
          width="15"
          height="15"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
          <polyline points="10 9 9 9 8 9" />
        </svg>
      ),
    },
  ]

  function go(p: Page) {
    setPage(p)
    setProjectId(null)
    setMenuOpen(false)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const activeKey = page === "project" ? "work" : page

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#faf9f6]/90 backdrop-blur-sm border-b border-[#e5ddd0]">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center">
        {/* Logo — calligraphy style */}
        <button
          onClick={() => go("home")}
          className="font-[family-name:var(--font-calligraphy)] text-2xl text-[#1e1b16] hover:text-[#6b5fa8] transition-colors duration-200 shrink-0 tracking-wider"
        >
          吴贝然
        </button>

        {/* Centered nav */}
        <nav className="hidden md:flex items-center gap-8 flex-1 justify-center">
          {links.map((link) => (
            <button
              key={`desktop-${link.key}`}
              onClick={() => go(link.key)}
              className={`flex items-center gap-1.5 text-sm font-[family-name:var(--font-sans)] tracking-widest uppercase transition-colors duration-200 ${
                activeKey === link.key
                  ? "text-[#6b5fa8]"
                  : "text-[#7a6e60] hover:text-[#6b5fa8]"
              }`}
            >
              {link.icon}
              {link.label}
            </button>
          ))}
        </nav>

        {/* Contact — far right with square icon */}
        <a
          href="mailto:beiran0808@163.com"
          className="hidden md:flex items-center gap-2 shrink-0 group"
        >
          <span className="w-8 h-8 bg-[#6b5fa8] flex items-center justify-center group-hover:bg-[#8b6f5e] transition-colors duration-200">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
          </span>
          <span className="text-sm font-[family-name:var(--font-sans)] tracking-widest uppercase text-[#6b5fa8] group-hover:text-[#8b6f5e] transition-colors">
            联系我
          </span>
        </a>

        {/* Mobile hamburger */}
        <button
          className="md:hidden ml-auto flex flex-col gap-1.5 p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="菜单"
        >
          <span
            className={`block w-5 h-px bg-[#1e1b16] transition-all ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-5 h-px bg-[#1e1b16] transition-all ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-5 h-px bg-[#1e1b16] transition-all ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden border-t border-[#e5ddd0] bg-[#faf9f6] px-6 py-6 flex flex-col gap-5">
          {links.map((link) => (
            <button
              key={`mobile-${link.key}`}
              onClick={() => go(link.key)}
              className={`flex items-center gap-2 text-sm tracking-widest uppercase text-left ${
                activeKey === link.key ? "text-[#6b5fa8]" : "text-[#7a6e60]"
              }`}
            >
              {link.icon}
              {link.label}
            </button>
          ))}
          <a
            href="mailto:beiran0808@163.com"
            className="text-sm tracking-widest uppercase text-[#6b5fa8] flex items-center gap-2"
          >
            <span className="w-6 h-6 bg-[#6b5fa8] flex items-center justify-center">
              <svg
                width="11"
                height="11"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </span>
            联系我
          </a>
        </div>
      )}
    </header>
  )
}

// ─── Home Page ────────────────────────────────────────────────────────────────

const PHILOSOPHY = [
  {
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="8" x2="12" y2="12" />
        <line x1="12" y1="12" x2="16" y2="14" />
      </svg>
    ),
    title: "结构化思考",
    desc: "在面对复杂的系统和业务逻辑时，我倾向于从底层架构出发，理清数据流和用户旅程。通过建立清晰的信息层级，将混乱转化为秩序，为用户提供直观且可预测的交互路径。",
  },
  {
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
    title: "视觉精确",
    desc: "现代极简不仅是风格，更是功能。通过大量留白和精确的排版，突出核心数据和用户目标，减少认知负荷。",
  },
  {
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
    title: "同理心驱动",
    desc: "设计的核心是人。我始终保持对用户真实需求的敏感度，通过深入调研和持续测试，确保每一个设计决策都建立在真实的用户痛点之上。",
  },
  {
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
        <polyline points="17 6 23 6 23 12" />
      </svg>
    ),
    title: "业务洞察",
    desc: "优秀的设计不仅仅是看起来漂亮，更要能推动业务指标的增长。作为具备产品思维的设计师，我能够将商业目标无缝融入用户体验中，实现用户价值与商业价值的双赢。",
  },
]

const SKILLS = ["UI/UX 设计", "产品策略", "交互设计", "前端开发", "数据分析"]
const PROCESS = [
  {
    num: "01",
    title: "发现问题 Discover",
    desc: "了解目标用户、业务背景和现有体验，通过访谈、观察、竞品分析等方式收集信息。",
  },
  {
    num: "02",
    title: "定义方向 Define",
    desc: "梳理核心痛点、用户流程和优先级，将模糊需求转化为清晰的产品问题。",
  },
  {
    num: "03",
    title: "设计方案 Design",
    desc: "完成信息架构、用户流程、线框图和高保真原型，并持续评估方案可行性。",
  },
  {
    num: "04",
    title: "测试迭代 Validate",
    desc: "通过可用性测试、反馈数据和团队评审验证设计，持续优化交互逻辑和产品体验。",
  },
]

function HomePage({
  setPage,
  setProjectId,
}: {
  setPage: (p: Page) => void
  setProjectId: (id: number) => void
}) {
  return (
    <>
      {/* Hero */}
      <section className="min-h-screen flex items-center pt-16 px-6">
        <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-16 items-center py-20">
          <div>
            <h1 className="font-[family-name:var(--font-serif)] text-6xl md:text-8xl text-[#1e1b16] leading-[1.05] mb-6">
              吴贝然
            </h1>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#ede8f5] text-[#6b5fa8] text-sm mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-[#6b5fa8] inline-block" />
              UI/UX 设计师 &amp; 产品经理
            </span>
            <p className="text-xs tracking-[0.3em] uppercase text-[#8b6f5e] mb-1 font-[family-name:var(--font-sans)]">
              专注与洞察
            </p>
            <p className="text-sm text-[#6b5fa8] italic mb-6 font-[family-name:var(--font-sans)]">
              Precision &amp; Insight
            </p>
            <p className="text-[#7a6e60] text-base leading-relaxed max-w-lg mb-10 font-[family-name:var(--font-sans)] font-light">
              我是一名热爱将复杂问题转化为优雅数字体验的 UI/UX
              设计师和产品经理。我致力于通过结构化的思维和创新的设计理念，打造出既具备分析严谨性，又充满创意直觉的现代数字产品。
            </p>
            <div className="flex items-center gap-4 flex-wrap">
              <button
                onClick={() => {
                  setPage("work")
                  window.scrollTo({ top: 0, behavior: "smooth" })
                }}
                className="px-7 py-3 bg-[#1e1b16] text-[#faf9f6] text-sm tracking-wider font-[family-name:var(--font-sans)] hover:bg-[#8b6f5e] transition-colors duration-300"
              >
                查看作品
              </button>
              <a
                href={resumePDF}
                download="吴贝然-简历.pdf"
                className="px-7 py-3 border border-[#1e1b16] text-[#1e1b16] text-sm tracking-wider font-[family-name:var(--font-sans)] hover:bg-[#f2ede5] transition-colors duration-300 flex items-center gap-2"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                下载简历 PDF
              </a>
            </div>
          </div>
          <div className="flex justify-center md:justify-end">
            <div className="relative w-72 h-80 md:w-96 md:h-[440px]">
              <div className="w-full h-full rounded-2xl overflow-hidden shadow-sm bg-[#e8e3f0]">
                <img
                  src={profilePhoto}
                  alt="吴贝然个人照片"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="absolute -bottom-3 -right-3 w-20 h-20 bg-[#6b5fa8] opacity-15 rounded-xl" />
            </div>
          </div>
        </div>
      </section>

      {/* 设计哲学 */}
      <section className="py-24 px-6 bg-[#f0eef9]">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h2 className="font-[family-name:var(--font-serif)] text-4xl text-[#1e1b16] mb-2">
              设计哲学
            </h2>
            <p className="text-[#7a6e60] font-[family-name:var(--font-sans)] font-light">
              平衡分析严谨性与创意直觉，坚持以人为本的设计原则。
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {PHILOSOPHY.map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-2xl p-8 flex flex-col gap-4"
              >
                <div className="w-10 h-10 rounded-lg bg-[#ede8f5] flex items-center justify-center text-[#6b5fa8]">
                  {item.icon}
                </div>
                <h3 className="font-[family-name:var(--font-sans)] font-semibold text-lg text-[#1e1b16]">
                  {item.title}
                </h3>
                <p className="text-[#7a6e60] font-[family-name:var(--font-sans)] font-light text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 关于 */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto space-y-6">
          <div className="bg-[#f5f4f2] rounded-2xl p-8 md:p-12 grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-[#7a6e60] leading-relaxed font-[family-name:var(--font-sans)] font-light mb-8">
                我拥有跨学科的背景，融合了视觉设计的敏锐度和前端开发的逻辑性。这使我不仅能构思出富有创意的界面，还能确保它们在技术实现上的高保真度。
              </p>
              <div className="flex flex-wrap gap-2">
                {SKILLS.map((s) => (
                  <span
                    key={s}
                    className="px-3 py-1.5 rounded-full border border-[#d5cec5] text-sm text-[#7a6e60] font-[family-name:var(--font-sans)]"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-[family-name:var(--font-serif)] text-2xl text-[#1e1b16] mb-8">
                设计流程
              </h3>
              <div className="grid grid-cols-2 gap-6">
                {PROCESS.map((step) => (
                  <div key={step.num}>
                    <p className="font-[family-name:var(--font-serif)] text-2xl text-[#6b5fa8] mb-1">
                      {step.num}
                    </p>
                    <h4 className="font-[family-name:var(--font-sans)] font-semibold text-sm text-[#1e1b16] mb-2">
                      {step.title}
                    </h4>
                    <p className="text-xs text-[#7a6e60] leading-relaxed font-[family-name:var(--font-sans)] font-light">
                      {step.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="bg-[#f0eef9] rounded-2xl p-8 md:p-12 grid md:grid-cols-2 gap-10 items-center">
            <h3 className="font-[family-name:var(--font-serif)] text-3xl text-[#1e1b16]">
              工作之外
            </h3>
            <div>
              <p className="text-[#7a6e60] leading-relaxed font-[family-name:var(--font-sans)] font-light mb-6 text-sm">
                设计之外，我也关注人工智能、数字城市和新兴技术如何改变人与信息、空间和服务之间的关系。我喜欢观察列表中容易被忽略的体验问题，并思考如何通过更清晰的结构和交互方式进行改善。
              </p>
              <div className="flex flex-wrap gap-2">
                {["AI 产品", "交互设计", "前端实现"].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 rounded-full border border-[#c5bce8] text-sm text-[#6b5fa8] font-[family-name:var(--font-sans)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

// ─── Work Page ────────────────────────────────────────────────────────────────

function WorkPage({
  setPage,
  setProjectId,
}: {
  setPage: (p: Page) => void
  setProjectId: (id: number) => void
}) {
  function openProject(id: number) {
    setProjectId(id)
    setPage("project")
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <section className="min-h-screen pt-28 pb-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-14">
          <p className="text-xs tracking-[0.35em] uppercase text-[#8b6f5e] mb-3 font-[family-name:var(--font-sans)]">
            精选案例
          </p>
          <h2 className="font-[family-name:var(--font-serif)] text-4xl md:text-5xl text-[#1e1b16]">
            作品集
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {PROJECTS.map((project) => (
            <button
              key={project.id}
              onClick={() => openProject(project.id)}
              className="group text-left border border-[#e5ddd0] rounded-2xl overflow-hidden bg-white hover:border-[#6b5fa8] hover:shadow-md transition-all duration-300"
            >
              {/* Image — object-contain to show full image */}
              <div
                className="bg-[#f5f3fb] flex items-center justify-center overflow-hidden"
                style={{ height: "240px" }}
              >
                <img
                  src={project.image}
                  alt={project.imageAlt}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500 p-2"
                />
              </div>

              {/* Card body */}
              <div className="p-6">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <span className="inline-block text-xs tracking-widest uppercase text-[#6b5fa8] font-[family-name:var(--font-sans)] bg-[#ede8f5] px-2.5 py-1 rounded-full">
                    {project.category}
                  </span>
                  <span className="text-xs text-[#7a6e60] font-[family-name:var(--font-sans)] mt-0.5">
                    {project.year}
                  </span>
                </div>
                <h3 className="font-[family-name:var(--font-serif)] text-xl text-[#1e1b16] group-hover:text-[#6b5fa8] transition-colors mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-[#7a6e60] font-[family-name:var(--font-sans)] font-light leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex items-center gap-1 text-[#6b5fa8] text-sm font-[family-name:var(--font-sans)] group-hover:gap-2 transition-all duration-200">
                  <span>查看案例分析</span>
                  <ArrowRight />
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Project Detail Page ──────────────────────────────────────────────────────

function ProjectNav({
  projectId,
  setProjectId,
  setPage,
  position,
}: {
  projectId: number
  setProjectId: (id: number) => void
  setPage: (p: Page) => void
  position: "top" | "bottom"
}) {
  const idx = PROJECTS.findIndex((p) => p.id === projectId)
  const prev = PROJECTS[idx - 1] ?? null
  const next = PROJECTS[idx + 1] ?? null

  function go(id: number) {
    setProjectId(id)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <div
      className={`flex items-center justify-between gap-4 ${
        position === "top" ? "mb-12" : "mt-16 pt-10 border-t border-[#e5ddd0]"
      }`}
    >
      {prev ? (
        <button
          onClick={() => go(prev.id)}
          className="flex items-center gap-2 text-[#7a6e60] hover:text-[#1e1b16] transition-colors group"
        >
          <span className="w-9 h-9 border border-[#e5ddd0] flex items-center justify-center group-hover:border-[#1e1b16] transition-colors">
            <ArrowLeft />
          </span>
          <span className="text-sm font-[family-name:var(--font-sans)] hidden sm:block">
            <span className="block text-xs tracking-widest uppercase text-[#8b6f5e] mb-0.5">
              上一个项目
            </span>
            {prev.title}
          </span>
        </button>
      ) : (
        <button
          onClick={() => {
            setPage("work")
            window.scrollTo({ top: 0 })
          }}
          className="flex items-center gap-2 text-[#7a6e60] hover:text-[#1e1b16] transition-colors group"
        >
          <span className="w-9 h-9 border border-[#e5ddd0] flex items-center justify-center group-hover:border-[#1e1b16] transition-colors">
            <ArrowLeft />
          </span>
          <span className="text-sm font-[family-name:var(--font-sans)] hidden sm:block">
            返回作品集
          </span>
        </button>
      )}

      <span className="text-xs tracking-widest uppercase text-[#8b6f5e] font-[family-name:var(--font-sans)]">
        {idx + 1} / {PROJECTS.length}
      </span>

      {next ? (
        <button
          onClick={() => go(next.id)}
          className="flex items-center gap-2 text-[#7a6e60] hover:text-[#1e1b16] transition-colors group"
        >
          <span className="text-sm font-[family-name:var(--font-sans)] text-right hidden sm:block">
            <span className="block text-xs tracking-widest uppercase text-[#8b6f5e] mb-0.5">
              下一个项目
            </span>
            {next.title}
          </span>
          <span className="w-9 h-9 border border-[#e5ddd0] flex items-center justify-center group-hover:border-[#1e1b16] transition-colors">
            <ArrowRight />
          </span>
        </button>
      ) : (
        <button
          onClick={() => {
            setPage("work")
            window.scrollTo({ top: 0 })
          }}
          className="flex items-center gap-2 text-[#7a6e60] hover:text-[#1e1b16] transition-colors group"
        >
          <span className="text-sm font-[family-name:var(--font-sans)] hidden sm:block">
            返回作品集
          </span>
          <span className="w-9 h-9 border border-[#e5ddd0] flex items-center justify-center group-hover:border-[#1e1b16] transition-colors">
            <ArrowRight />
          </span>
        </button>
      )}
    </div>
  )
}

function InteractiveCourseCaseStudy({
  project,
  projectId,
  setProjectId,
  setPage,
}: {
  project: Project
  projectId: number
  setProjectId: (id: number) => void
  setPage: (p: Page) => void
}) {
  const stages = [
    ["01", "认识地球", "外观认知与拟人名片档案"],
    ["02", "地球结构", "三维交互剖切观察地心构造"],
    ["03", "季节变化", "手势拖曳公转轨道实验"],
    ["04", "地区比较", "用真实气候建立生活连接"],
    ["05", "知识测试", "情境问答与勋章巩固"],
  ]
  const step = (number: string, title: string, subtitle: string, children: ReactNode) => (
    <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-8 lg:gap-14 py-12 border-t border-[#e5ddd0]">
      <aside>
        <span className="inline-block bg-[#efd3c3] px-3 py-1 text-[10px] tracking-widest font-semibold text-[#4a3930]">STEP {number} / 08</span>
        <h2 className="mt-4 font-[family-name:var(--font-serif)] text-2xl leading-snug text-[#1e1b16]">{title}</h2>
        <p className="mt-3 text-xs tracking-[0.16em] text-[#506455] uppercase">{subtitle}</p>
      </aside>
      <div>{children}</div>
    </div>
  )

  return (
    <section className="min-h-screen bg-[#f7f6f3] pt-24 pb-24 px-6">
      <div className="max-w-6xl mx-auto">
        <ProjectNav projectId={projectId} setProjectId={setProjectId} setPage={setPage} position="top" />
        <header className="max-w-4xl pt-8 pb-14">
          <span className="text-xs tracking-widest uppercase text-[#8b6f5e]">{project.category} · Case Study</span>
          <h1 className="mt-4 font-[family-name:var(--font-serif)] text-4xl md:text-6xl text-[#1e1b16] leading-tight">{project.title}</h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[#665d55]">{project.description}</p>
          <div className="mt-8 flex flex-wrap gap-x-10 gap-y-4 text-sm text-[#655b52]">
            <div><span className="block text-[10px] tracking-widest uppercase text-[#8b6f5e] mb-1">我的角色</span>{project.role}</div>
            <div><span className="block text-[10px] tracking-widest uppercase text-[#8b6f5e] mb-1">年份</span>{project.year}</div>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-14">
          {[
            ["01 / ROLE", "角色职责", "UX/UI Designer & 交互系统架构师"],
            ["02 / TIMELINE", "周期与里程碑", "8 周：调研、架构、原型与验证"],
            ["03 / PLATFORM", "目标媒介环境", "实体课堂触控大屏＋学生平板"],
            ["04 / AUDIENCE", "核心受众", "10岁小学五年级学生"],
          ].map(([label, title, text]) => (
            <div key={label} className="bg-white border border-[#eee9e3] p-6 min-h-[170px] shadow-sm">
              <p className="text-[10px] tracking-widest text-[#506455]">{label}</p>
              <h2 className="mt-3 text-xl font-semibold text-[#292522]">{title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-[#655b52]">{text}</p>
            </div>
          ))}
        </div>

        {/* 可操作的课程原型，替换原本的静态导航示意图 */}
        <InteractiveEarthSimulator />

        {step("01", "了解用户：从学习痛点出发", "EMPATHIZE & DISCOVER", <div className="space-y-5">
          <blockquote className="bg-white p-8 text-xl md:text-2xl italic leading-relaxed text-[#37312c] shadow-sm">“如何让学生愿意主动开始学习，并在学习过程中持续保持兴趣？”这成为后续学习目标、内容组织以及交互方式设计的基础。</blockquote>
          <div className="bg-[#ebeae7] p-6"><p className="font-semibold text-lg">Jack · 10岁</p><p className="text-sm text-[#655b52]">小学五年级学生 · 典型探索型数字原住民</p><div className="grid md:grid-cols-3 gap-4 mt-5">{[["行为习惯特征", "熟悉 iPad、Switch 等触控产品，习惯以手势试错探索。"], ["核心挫败痛点", "密集文字与抽象术语难以维持注意力，缺少即时反馈便容易放弃。"], ["核心驱动激励", "渴望操作 3D 模型、发现规律，并获得阶段通关的成就感。"]].map(([t, d], i) => <div key={t} className={"p-5 text-sm leading-relaxed " + (i === 1 ? "bg-[#f8e9e0]" : i === 2 ? "bg-[#e7f1e8]" : "bg-white")}><b>{t}</b><p className="mt-2 text-[#655b52]">{d}</p></div>)}</div></div>
        </div>)}

        {step("02", "明确学习目标：从“记忆”转向“理解”", "COGNITIVE SHIFT & PURPOSE", <div className="grid md:grid-cols-2 gap-4"><div className="bg-white p-7"><p className="text-xs text-red-600">TRADITIONAL MODEL</p><h3 className="mt-3 text-xl font-semibold">被动结论背诵</h3><p className="mt-3 text-sm leading-relaxed text-[#655b52]">仅记忆春夏秋冬与公转周期，无法建立地轴倾角、光照与温度之间的三维关系。</p></div><div className="bg-[#e7f0e8] p-7"><p className="text-xs text-[#506455]">PROPOSED PARADIGM</p><h3 className="mt-3 text-xl font-semibold">空间推导演绎</h3><p className="mt-3 text-sm leading-relaxed text-[#506455]">学生旋转地球仪倾角，观察直射光变化，自主推导季节差异背后的科学规律。</p></div></div>)}

        {step("03", "组织学习内容：建立循序渐进的学习路径", "CURRICULUM INFORMATION ARCHITECTURE", <div className="bg-white p-7 shadow-sm"><div className="flex items-center justify-between mb-5"><span className="text-xs tracking-widest">LEARNING ROADMAP SEQUENCE</span><span className="text-sm text-[#506455]">5-Step Sequential Gateway</span></div><div className="grid grid-cols-1 sm:grid-cols-5 gap-2">{stages.map(([n, t, d], i) => <div key={n} className={"p-4 min-h-32 " + (i === 4 ? "bg-[#e2f0e4]" : "bg-[#f1f0ee]")}><p className="text-[10px] text-[#795f50]">STAGE {n}</p><h3 className="mt-3 font-semibold">{t}</h3><p className="mt-2 text-xs leading-relaxed text-[#655b52]">{d}</p></div>)}</div><p className="mt-6 bg-[#f3f2f0] p-4 text-sm text-[#655b52]"><b>内容架构逻辑说明：</b>从直观具象的行星外观入手，逐步过渡至三维空间概念，再以真实地区的气候体验完成认知闭环。</p></div>)}

        {step("04", "设计互动学习环境：让学生主动参与", "PHYSICAL ERGONOMICS & UI STANCE", <div className="grid md:grid-cols-2 gap-5"><div className="bg-white p-6 shadow-sm"><div className="h-48 rounded-lg bg-[#d9f4fa] flex items-center justify-center text-7xl">🌍</div><h3 className="mt-5 font-semibold">“你好，我是地球！”角色化自我介绍</h3><p className="mt-2 text-sm leading-relaxed text-[#655b52]">用拟人化开篇和大圆角手势按钮，消除儿童对天文学的距离感。</p></div><div className="bg-white p-6 shadow-sm"><div className="h-48 rounded-lg bg-gradient-to-b from-[#9bc4e1] to-[#eaa58d] p-5 flex flex-col justify-center gap-2">{["INTRODUCTION", "STRUCTURE", "DIFFERENT SEASONS"].map(x => <div key={x} className="rounded-full bg-[#7951d6] py-2 text-center text-xs font-bold text-white">{x}</div>)}</div><h3 className="mt-5 font-semibold">大圆角胶囊手势触控</h3><p className="mt-2 text-sm leading-relaxed text-[#655b52]">符合儿童手掌触控尺度，以高对比按钮支持自然的探索路径。</p></div></div>)}

        {step("05", "视觉化表达：降低科学知识的理解难度", "COGNITIVE LOAD OPTIMIZATION", <div className="bg-white p-6 shadow-sm"><div className="rounded-lg bg-[#91bde3] p-6 md:p-10 flex flex-col md:flex-row items-center justify-around"><div className="w-52 h-52 rounded-full bg-[radial-gradient(circle_at_35%_35%,#ffe45b_0_15%,#e06d2f_16%_35%,#b54232_36%_55%,#426db1_56%)] border-8 border-[#619bd3]" /><div className="mt-5 md:mt-0 space-y-3">{["ATMOSPHERE", "CRUST", "UPPER MANTLE", "OUTER CORE", "INNER CORE"].map(x => <div key={x} className="bg-white/80 px-4 py-2 text-xs font-bold text-[#426db1]">{x}</div>)}</div></div><p className="mt-4 bg-[#f3f2f0] p-4 text-sm leading-relaxed text-[#655b52]"><b>层级递进式切片交互：</b>将文字推导转换为颜色高亮与地球剖面，让学生轻触标签即可理解地壳、地幔与地核。</p></div>)}

        {step("06", "连接现实情境：让知识与生活产生联系", "REAL-WORLD CASE GROUNDING", <div className="bg-white p-7 shadow-sm"><h3 className="text-xl font-semibold">为什么不同地方的季节体验会如此不同？</h3><p className="mt-2 text-sm text-[#655b52]">将宏观的地球自转与公转知识，和真实生活体感直接并置。</p><div className="grid md:grid-cols-2 gap-4 mt-6"><div className="bg-[#fae7bf] p-6"><h4 className="font-semibold">密歇根州 VS 佛罗里达</h4><p className="mt-3 text-sm text-[#655b52]">高纬度地区四季分明；低纬度地区接近赤道，全年温暖、雨季明显。</p></div><div className="bg-[#f1ffd9] p-6"><h4 className="font-semibold">地轴倾角与四季成因</h4><p className="mt-3 text-sm text-[#655b52]">地球自转轴相对公转平面的倾斜，是季节更迭的根本诱因。</p></div></div></div>)}

        {step("07", "加入互动测试：巩固学习成果", "GAMIFIED ASSESSMENT & VALIDATION", <div className="bg-white p-7 shadow-sm"><h3 className="text-xl font-semibold">🌍 地球探索者问答</h3><p className="mt-6 text-sm">当地球处于漫天大雪的冬季时，太阳直射点正好移动到了哪里？</p><div className="grid md:grid-cols-2 gap-3 mt-5">{["A. 赤道正上方", "B. 南回归线 (Tropic of Capricorn)", "C. 北极圈中心点", "D. 本初子午线"].map((x, i) => <div key={x} className={"p-4 text-sm " + (i === 1 ? "bg-[#dbeedc] font-semibold" : "bg-[#f5f4f2]")}>{x}{i === 1 && " ✓"}</div>)}</div><p className="mt-5 bg-[#f2f4ef] p-4 text-sm">✦ 推演正确！此时南半球正享受炎炎夏日。</p></div>)}

        {step("08", "形成完整的学习闭环", "CLOSED-LOOP SYSTEM SYNTHESIS", <div className="space-y-6"><div className="bg-white p-7 shadow-sm"><h3 className="text-xl font-semibold">全链路八步驱动信息架构全景</h3><div className="flex flex-wrap gap-2 mt-5">{["01 了解用户", "02 明确目标", "03 组织内容", "04 设计环境", "05 视觉表达", "06 现实情境", "07 互动测试"].map(x => <span key={x} className="bg-[#efeeec] px-3 py-2 text-xs">{x}</span>)}</div></div><blockquote className="bg-white p-8 md:p-14 font-[family-name:var(--font-serif)] text-3xl md:text-4xl leading-snug text-[#292522]">“这个项目的重点并不是简单地将传统课程搬到数字屏幕上，而是重新思考学生如何参与学习。”</blockquote><div className="grid grid-cols-2 md:grid-cols-4 bg-[#e7f0e7] p-6 gap-5">{[["89.4%", "概念理解留存率提升"], ["18.5 min", "平均自主沉浸时长"], ["94%", "学生主动完成三阶通关"], ["0 门槛", "无成人干预自主上手"]].map(([n, d]) => <div key={n}><p className="text-3xl font-semibold">{n}</p><p className="mt-1 text-xs text-[#506455]">{d}</p></div>)}</div></div>)}
        <ProjectNav projectId={projectId} setProjectId={setProjectId} setPage={setPage} position="bottom" />
      </div>
    </section>
  )
}

function ProjectDetailPage({
  projectId,
  setProjectId,
  setPage,
}: {
  projectId: number
  setProjectId: (id: number) => void
  setPage: (p: Page) => void
}) {
  const project = PROJECTS.find((p) => p.id === projectId)!

  if (projectId === 4) {
    return <InteractiveCourseCaseStudy project={project} projectId={projectId} setProjectId={setProjectId} setPage={setPage} />
  }

  return (
    <section className="min-h-screen pt-24 pb-24 px-6">
      <div className="max-w-3xl mx-auto">
        {/* Top arrow nav */}
        <ProjectNav
          projectId={projectId}
          setProjectId={setProjectId}
          setPage={setPage}
          position="top"
        />

        {/* Project header */}
        <div className="mb-10">
          <span className="inline-block text-xs tracking-widest uppercase text-[#6b5fa8] mb-4 font-[family-name:var(--font-sans)]">
            {project.category}
          </span>
          <h1 className="font-[family-name:var(--font-serif)] text-4xl md:text-5xl text-[#1e1b16] mb-6 leading-tight">
            {project.title}
          </h1>
          <div className="flex flex-wrap gap-6 text-sm font-[family-name:var(--font-sans)] text-[#7a6e60]">
            <div>
              <span className="block text-xs tracking-widest uppercase text-[#8b6f5e] mb-0.5">
                我的角色
              </span>
              {project.role}
            </div>
            <div>
              <span className="block text-xs tracking-widest uppercase text-[#8b6f5e] mb-0.5">
                年份
              </span>
              {project.year}
            </div>
          </div>
        </div>

        {/* Hero image */}
        <div
          className="w-full rounded-2xl overflow-hidden mb-12 bg-[#f5f3fb] flex items-center justify-center"
          style={{ minHeight: "320px" }}
        >
          <img
            src={project.image}
            alt={project.imageAlt}
            className="w-full h-full object-contain max-h-96 p-4"
          />
        </div>

        {/* Content blocks */}
        <div className="space-y-6">
          {project.blocks.map((block, i) => {
            if (block.type === "heading") {
              return (
                <h2
                  key={`h-${i}`}
                  className="font-[family-name:var(--font-serif)] text-2xl text-[#1e1b16] mt-10 first:mt-0"
                >
                  {block.text}
                </h2>
              )
            }
            if (block.type === "body") {
              return (
                <p
                  key={`b-${i}`}
                  className="text-[#7a6e60] leading-relaxed font-[family-name:var(--font-sans)] font-light"
                >
                  {block.text}
                </p>
              )
            }
            if (block.type === "label") {
              return (
                <p
                  key={`l-${i}`}
                  className="text-xs font-semibold tracking-widest uppercase text-[#8b6f5e] mt-6 mb-1 font-[family-name:var(--font-sans)]"
                >
                  {block.label}
                </p>
              )
            }
            if (block.type === "tags") {
              return (
                <div key={`t-${i}`} className="flex flex-wrap gap-2">
                  {block.items?.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1.5 rounded-full border border-[#d5cec5] text-sm text-[#7a6e60] font-[family-name:var(--font-sans)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )
            }
            if (block.type === "image" && block.src) {
              return (
                <div
                  key={`img-${i}`}
                  className={`my-2 flex justify-center ${
                    block.small ? "" : "w-full"
                  }`}
                >
                  <div
                    className={`rounded-2xl overflow-hidden bg-[#f5f3fb] ${
                      block.small ? "max-w-[320px] w-full" : "w-full"
                    }`}
                  >
                    <img
                      src={block.src}
                      alt={block.alt ?? ""}
                      className="w-full h-auto object-contain"
                    />
                  </div>
                </div>
              )
            }
            if (block.type === "image-pair") {
              return (
                <div key={`imgp-${i}`} className="grid grid-cols-2 gap-4 my-2">
                  <div className="rounded-2xl overflow-hidden bg-[#f5f3fb]">
                    <img
                      src={block.srcA}
                      alt={block.altA ?? ""}
                      className="w-full h-auto object-contain"
                    />
                  </div>
                  <div className="rounded-2xl overflow-hidden bg-[#f5f3fb]">
                    <img
                      src={block.srcB}
                      alt={block.altB ?? ""}
                      className="w-full h-auto object-contain"
                    />
                  </div>
                </div>
              )
            }
            if (block.type === "sn-section") {
              return (
                <SmartNoteSection key={`sn-${i}`} variant={block.variant!} />
              )
            }
            if (block.type === "info-cards") {
              return (
                <div key={`ic-${i}`} className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                  {block.cards?.map((card, ci) => (
                    <div
                      key={ci}
                      className="border border-[#e5ddd0] bg-white rounded-2xl p-6 flex flex-col justify-between hover:shadow-sm transition-all duration-300"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-2xl font-[family-name:var(--font-serif)] text-[#1e1b16] opacity-80">
                            {card.number}
                          </span>
                          <span className="px-3 py-1 bg-[#f5f4f2] rounded-full text-[10px] font-bold tracking-widest uppercase text-[#8b6f5e]">
                            {card.category}
                          </span>
                        </div>
                        <h3 className="font-[family-name:var(--font-serif)] text-lg text-[#1e1b16] mb-2 flex items-center gap-2">
                          {card.title}
                        </h3>
                        <p className="text-[#7a6e60] leading-relaxed font-[family-name:var(--font-sans)] font-light text-sm">
                          {card.description}
                        </p>
                      </div>
                      <div className="mt-6 pt-4 border-t border-[#f5f4f2] flex justify-end">
                        {card.icon}
                      </div>
                    </div>
                  ))}
                </div>
              )
            }
            if (block.type === "mode-cards") {
              return (
                <div key={`mc-${i}`} className="grid grid-cols-1 gap-4 my-4">
                  {block.modes?.map((mode, mi) => (
                    <div
                      key={mi}
                      className="rounded-2xl p-6 flex gap-5 items-start"
                      style={{ backgroundColor: mode.color }}
                    >
                      <div className="text-4xl flex-shrink-0 mt-0.5">
                        {mode.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-baseline gap-2 mb-1 flex-wrap">
                          <h3 className="font-[family-name:var(--font-serif)] text-xl text-[#1e1b16]">
                            {mode.title}
                          </h3>
                          <span className="text-xs font-semibold tracking-widest uppercase text-[#8b6f5e] font-[family-name:var(--font-sans)]">
                            {mode.subtitle}
                          </span>
                        </div>
                        <p className="text-[#7a6e60] leading-relaxed font-[family-name:var(--font-sans)] font-light text-sm">
                          {mode.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )
            }
            if (block.type === "pdf") {
              return (
                <div key={`pdf-${i}`} className="w-full my-4">
                  <div className="rounded-2xl overflow-hidden border border-[#e5ddd0] bg-white shadow-sm">
                    <iframe
                      src={block.src}
                      title={block.label ?? "Design mockup"}
                      className="w-full"
                      style={{ height: "600px", border: "none" }}
                    />
                  </div>
                  {block.label && (
                    <p className="text-center text-xs text-[#7a6e60] mt-2 font-[family-name:var(--font-sans)]">
                      {block.label}
                    </p>
                  )}
                </div>
              )
            }
            if (block.type === "placeholder") {
              return (
                <div
                  key={`p-${i}`}
                  className="w-full rounded-xl border-2 border-dashed border-[#e5ddd0] bg-[#faf9f6] flex items-center justify-center py-16 my-4"
                >
                  <div className="text-center">
                    <svg
                      className="mx-auto mb-3 text-[#d5cec5]"
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                      <circle cx="8.5" cy="8.5" r="1.5" />
                      <polyline points="21 15 16 10 5 21" />
                    </svg>
                    <p className="text-sm text-[#7a6e60] font-[family-name:var(--font-sans)]">
                      {block.label}
                    </p>
                  </div>
                </div>
              )
            }
            return null
          })}
        </div>

        {/* Bottom arrow nav */}
        <ProjectNav
          projectId={projectId}
          setProjectId={setProjectId}
          setPage={setPage}
          position="bottom"
        />
      </div>
    </section>
  )
}

// ─── Resume Page ──────────────────────────────────────────────────────────────

function Tag({ children }: { children: string }) {
  return (
    <span className="inline-block px-3 py-1 border border-[#d5cec5] rounded-full text-xs text-[#7a6e60] font-[family-name:var(--font-sans)]">
      {children}
    </span>
  )
}

function PurpleTag({ children }: { children: string }) {
  return (
    <span className="inline-block px-3 py-1 border border-[#c5bce8] rounded-full text-xs text-[#6b5fa8] font-[family-name:var(--font-sans)]">
      {children}
    </span>
  )
}

function SectionTitle({
  icon,
  children,
}: {
  icon: ReactNode
  children: string
}) {
  return (
    <div className="flex items-center gap-2 mb-5">
      <span className="text-[#6b5fa8]">{icon}</span>
      <h2 className="font-[family-name:var(--font-sans)] font-semibold text-xl text-[#1e1b16]">
        {children}
      </h2>
    </div>
  )
}

function BulletItem({ label, text }: { label: string; text: string }) {
  return (
    <li className="text-sm text-[#4a4540] font-[family-name:var(--font-sans)] leading-relaxed">
      <span className="font-semibold text-[#1e1b16]">{label}：</span>
      {text}
    </li>
  )
}

function ResumePage() {
  return (
    <section className="min-h-screen pt-24 pb-24 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex items-start justify-between mb-6 pb-6 border-b border-[#e5ddd0]">
          <div>
            <h1 className="font-[family-name:var(--font-sans)] font-bold text-5xl text-[#1e1b16] mb-1">
              吴贝然
            </h1>
            <p className="text-[#6b5fa8] font-[family-name:var(--font-sans)] text-base mb-4">
              体验架构 (UX/UI)
            </p>
            <div className="flex flex-wrap items-center gap-5 text-sm text-[#7a6e60] font-[family-name:var(--font-sans)]">
              <span className="flex items-center gap-1.5">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
                  <line x1="12" y1="18" x2="12.01" y2="18" />
                </svg>
                +86 15317723505
              </span>
              <span className="flex items-center gap-1.5">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                beiran0808@163.com
              </span>
              <span className="flex items-center gap-1.5">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <line x1="2" y1="12" x2="22" y2="12" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1 4-10z" />
                </svg>
                wubeiran.framer.website
              </span>
            </div>
          </div>
          <a
            href={resumePDF}
            download="吴贝然-简历.pdf"
            className="flex items-center gap-2 px-5 py-3 bg-[#1e1b16] text-white text-sm font-[family-name:var(--font-sans)] hover:bg-[#6b5fa8] transition-colors duration-200 shrink-0 mt-1"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            下载 PDF
          </a>
        </div>

        {/* Two-column body */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-10">
          {/* Left: main content */}
          <div className="space-y-10">
            {/* 工作经历 */}
            <div>
              <SectionTitle
                icon={
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                    <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
                  </svg>
                }
              >
                工作经历
              </SectionTitle>

              <div className="relative pl-5 border-l-2 border-[#e5ddd0]">
                <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-[#6b5fa8]" />
                <div className="flex items-start justify-between mb-1">
                  <h3 className="font-[family-name:var(--font-sans)] font-semibold text-base text-[#1e1b16]">
                    上海海顺新材
                  </h3>
                  <span className="text-xs bg-[#f0eef9] text-[#6b5fa8] px-3 py-1 rounded font-[family-name:var(--font-sans)] shrink-0 ml-4">
                    06/2025 - 07/2025
                  </span>
                </div>
                <p className="text-sm text-[#7a6e60] font-[family-name:var(--font-sans)] mb-3">
                  市场与产品运营实习生
                </p>
                <ul className="space-y-2 mb-4 list-disc list-inside">
                  <BulletItem
                    label="需求拆解与竞品分析"
                    text={
                      "基于「超迹 AI」获客工具搭建海外客户运营流程，对标同类 AI 营销产品完成竞品拆解，整理竞品功能、定价、落地场景文档，输出完整竞品分析报告；结合市场调研结果与行业数据、用户画像分析，优化客户筛选逻辑，每轮精准定位 100+ 高潜力客户，线索获取效率提升 20%"
                    }
                  />
                  <BulletItem
                    label="需求收集与产品迭代"
                    text="持续沉淀海外客户使用 AI 工具的反馈，梳理功能痛点与优化建议，对接运营团队输出需求清单，参与产品优化方案讨论，推动 AI 获客链路迭代"
                  />
                  <BulletItem
                    label="数据埋点与产品复盘"
                    text="搭建客户行为数据追踪体系，使用 Excel 完成邮件打开率、客户转化、分层运营等指标统计分析，输出可视化产品复盘报表，优化从获客到转化全流程产品体验"
                  />
                  <BulletItem
                    label="跨部门协同落地"
                    text="与业务、运营端对齐需求，输出标准化业务使用文档，保障 AI 工具项目落地与日常运营推进"
                  />
                </ul>
                <div className="flex flex-wrap gap-2">
                  {["市场调研", "数据分析", "AI工具"].map((t) => (
                    <Tag key={t}>{t}</Tag>
                  ))}
                </div>
              </div>
            </div>

            {/* 项目经历 */}
            <div>
              <SectionTitle
                icon={
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22.2 14.4L13 5.2a1 1 0 0 0-1.4 0L5.2 11.6a1 1 0 0 0 0 1.4L14.4 22.2a1 1 0 0 0 1.4 0l6.4-6.4a1 1 0 0 0 0-1.4z" />
                    <path d="m5 5-3 3" />
                    <path d="M9 3H5v4" />
                  </svg>
                }
              >
                项目经历
              </SectionTitle>

              <div className="space-y-6">
                {/* Project 1 */}
                <div className="border border-[#e5ddd0] rounded-xl p-6">
                  <div className="flex items-start justify-between mb-1">
                    <h3 className="font-[family-name:var(--font-sans)] font-semibold text-base text-[#1e1b16]">
                      密歇根州立大学博物馆导视系统优化
                    </h3>
                    <span className="text-xs bg-[#f0eef9] text-[#6b5fa8] px-3 py-1 rounded font-[family-name:var(--font-sans)] shrink-0 ml-4">
                      01/2026 - 04/2026
                    </span>
                  </div>
                  <p className="text-sm text-[#6b5fa8] font-[family-name:var(--font-sans)] mb-3">
                    产品研究与原型设计 | 美国
                  </p>
                  <p className="text-sm text-[#7a6e60] font-[family-name:var(--font-sans)] font-light leading-relaxed mb-3">
                    针对博物馆室内导航痛点，主导从用户研究到高保真原型设计的完整体验优化流程。通过实地观察和用户访谈，发现现有导视系统导致较高访客迷失率。
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right sidebar */}
          <div className="space-y-8">
            <div className="bg-[#faf9f6] border border-[#e5ddd0] rounded-2xl p-6">
              <h3 className="font-[family-name:var(--font-sans)] font-semibold text-base text-[#1e1b16] mb-4">
                技能专长
              </h3>
              <div className="flex flex-wrap gap-2">
                {SKILLS.map((s) => (
                  <PurpleTag key={s}>{s}</PurpleTag>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Main App Component ───────────────────────────────────────────────────────

export default function App() { 
  const [page, setPage] = useState<Page>("home")
  const [projectId, setProjectId] = useState<number | null>(null)

  return (
    <div className="min-h-screen bg-[#faf9f6] text-[#1e1b16] font-[family-name:var(--font-sans)]">
      <Nav page={page} setPage={setPage} setProjectId={setProjectId} />

      <main>
        {page === "home" && (
          <HomePage setPage={setPage} setProjectId={setProjectId} />
        )}
        {page === "work" && (
          <WorkPage setPage={setPage} setProjectId={setProjectId} />
        )}
        {page === "resume" && <ResumePage />}
        {page === "project" && projectId !== null && (
          <ProjectDetailPage
            projectId={projectId}
            setProjectId={setProjectId}
            setPage={setPage}
          />
        )}
      </main>
    </div>
  )
}
