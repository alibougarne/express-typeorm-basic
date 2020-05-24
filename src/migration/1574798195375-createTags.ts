import { MigrationInterface, QueryRunner, getRepository } from "typeorm";
import { Tag, LogoType } from "../entity/Tag";

export class createTags1574798195375 implements MigrationInterface {
    private tagRepository = getRepository(Tag);
    public async up(queryRunner: QueryRunner): Promise<any> {
        let tags: Object[] = [
            {
                name: 'Vue Js',
                link: 'https://vuejs.org',
                hashtag: 'vuejs',
                description: 'Vue.js - The Progressive JavaScript Framework',
                color: '#fff',
                backgroundColor: '#41b883',
                icon: 'https://vuejs.org/images/logo.png',
                logoType: LogoType.Image
            },
            {
                name: 'Spring Boot',
                link: 'https://spring.io/',
                hashtag: 'springboot',
                description: 'Spring Boot is designed to get you up and running as quickly as possible, with minimal upfront configuration of Spring. Spring Boot takes an opinionated view of building production-ready applications',
                color: '#fff',
                backgroundColor: '#67be45',
                icon: 'https://spring.io/img/homepage/icon-spring-boot.svg',
                logoType: LogoType.Image
            },
            {
                name: 'Node Js',
                link: 'https://nodejs.org/',
                hashtag: 'nodejs',
                description: 'Node.js® is a JavaScript runtime built on Chrome‘s V8 JavaScript engine',
                color: '#fff',
                backgroundColor: '#689f63',
                icon: 'https://nodejs.org/static/images/logo.svg',
                logoType: LogoType.Image
            },
            {
                name: 'Joomla',
                link: 'https://www.joomla.org/',
                hashtag: 'joomla',
                description: 'Joomla! is an award-winning content management system (CMS), which enables you to build web sites and powerful online applications.',
                color: '#fff',
                backgroundColor: '#1a3867',
                icon: 'https://cdn.joomla.org/images/Joomla_logo.png',
                logoType: LogoType.Image
            },
            {
                name: 'Bootstrap',
                link: 'https://getbootstrap.com/',
                hashtag: 'bootstrap',
                description: 'Build responsive, mobile-first projects on the web with the world’s most popular front-end component library',
                color: '#cbbde2',
                backgroundColor: '#563d7c',
                icon: 'https://getbootstrap.com/docs/4.4/assets/img/favicons/android-chrome-512x512.png',
                logoType: LogoType.Image
            },
            {
                name: 'Green sock Js',
                link: 'https://greensock.com/',
                hashtag: 'gsapjs',
                description: 'Greensock Animation API (GSAP) is an animation library that helps you create performant animations. It can be used safely (back to IE6!) to create animations without jank, and it‘s the only animation library (as far as I know) that handles SVG animations seamlessly',
                color: '#88ce01',
                backgroundColor: '#262626',
                icon: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/16327/logo-man.svg',
                logoType: LogoType.Image
            },
            {
                name: 'JQuery',
                link: 'https://jquery.com/',
                hashtag: 'jquery',
                description: 'The Write Less, Do More, JavaScript Library',
                color: '#fff',
                backgroundColor: '#0769ad',
                icon: 'https://jquery.com/jquery-wp-content/themes/jquery/images/logo-jquery@2x.png',
                logoType: LogoType.TextAndImage
            },
            {
                name: 'Animate.css',
                link: 'https://jquery.com/',
                hashtag: 'animatecss',
                description: 'Just-add-water CSS animations.',
                color: '#4fd649',
                backgroundColor: '#fff',
                icon: null,
                logoType: LogoType.TextAndImage
            },
            'React Js',
            'Quasar framework',
            'VuetifyJs',
            'Material Design',
            'JSF',
            'SQL Server',
            'Mongo DB',
            'SQl Lite',
            'Asp.Net',
            'Hibernate',
            'JPA',
            'Typescript',
            'ES6',
            'MySql',
            'EntityFramework',
            'Docker'
        ]
        try {
           //this.createTag(tags);
        } catch (error) {
            throw error;
        }

    }
    createTag(tags: string[]): void {
        tags.forEach(async (tagName: string) => {
            let tag = new Tag();
            tag.createdAt = tag.updatedAt = new Date();
            tag.name = tagName;
            await this.tagRepository.save(tag);
        })
    }
    public async down(queryRunner: QueryRunner): Promise<any> {
    }


}
