.. contents:: Table of Contents
   :depth: 5



*neggen*
--------

Introduce
---------
 
- 1. install with -g to use cli

    ::
    
        npm install neggen -g

- 2. show all templates

    ::
    
        neggen --mode allTems

- 3. refer to `Template naming rules`_ for template-name-rules

    ::
    
        check it

- 4. srch a template

    ::
    
        neggen --mode srchTem --str 4tl3

- 5. show template layout

    ::
    
        neggen --mode printTem --str 4tl3tr2bl
 
- 6. generate html and css files

    ::
    
        neggen --mode creat --tem 4tl3tr2bl --height 500 --width 500 --iheight 1/5 --iwidth 1/5 --itop 2/5 --ileft 2/5
        
- 7. open html with firefox        
        
        


Install
-------

fromRemote
==========
    
    ::
    
        npm install neggen
        //or for using cli
        npm install neggen -g

fromSource
==========
 
    ::
    
        git clone git@github.com:ihgazni2/neggen.git
        npm install ./neggen
        //or for using cli
        npm install ./neggen -g
        
        

Usage
-----


CLI
===

*prepare*
#########

    ::
    
        npm install neggen -g



srchTem
#######

    ::
         
         neggen --mode srchTem --str 4tl3
         
.. image:: /docs/images/tmplt/cli.srchTem.0.png


printTem
########

    ::
         
         neggen --mode printTem --str 4tl3tr2bl
         
.. image:: /docs/images/tmplt/cli.printTem.0.png


allTems
#######

    ::
         
         neggen --mode allTems
         
temPage0
^^^^^^^^
.. image:: /docs/images/tmplt/showAllTems.0.png


temPage1
^^^^^^^^
.. image:: /docs/images/tmplt/showAllTems.1.png


temPage2
^^^^^^^^
.. image:: /docs/images/tmplt/showAllTems.2.png


temPage3
^^^^^^^^
.. image:: /docs/images/tmplt/showAllTems.3.png


temPage4
^^^^^^^^
.. image:: /docs/images/tmplt/showAllTems.4.png


temPage5
^^^^^^^^
.. image:: /docs/images/tmplt/showAllTems.5.png


temPage6
^^^^^^^^
.. image:: /docs/images/tmplt/showAllTems.6.png


temPage7
^^^^^^^^
.. image:: /docs/images/tmplt/showAllTems.7.png


temPage8
^^^^^^^^
.. image:: /docs/images/tmplt/showAllTems.8.png

creat
#####

*params* meaning 
^^^^^^^^^^^^^^^^

    ::
        
         # file name 
         --name
         # for parent view (container)
         --top      
         --left
         --height
         --width
         # see the picture below
         --itop
         --ileft
         --iheight
         --iwidth
         # the layout-template name
         --template
         
.. image:: /docs/images/tmplt/config.spt.0.png
.. image:: /docs/images/tmplt/config.spt.1.png


cmdline
^^^^^^^

html+css
~~~~~~~~

    ::
    
        neggen --mode creat --tem 4tl3tr2bl
        ls -l 4tl3tr2bl
        
.. image:: /docs/images/tmplt/cli.creat.tem.0.png       
.. image:: /docs/images/tmplt/cli.creat.tem.1.png
.. image:: /docs/images/tmplt/cli.creat.tem.2.png


-web

    ::
        
        #open the 4tl3tr2bl.html with firefox

.. image:: /docs/images/tmplt/cli.creat.tem.3.png


styleInline
~~~~~~~~~~~

    ::
    
        rm -r 4tl3tr2bl
        neggen --mode creat --tem 4tl3tr2bl --styleInline true
        ls -l 4tl3tr2bl
        
.. image:: /docs/images/tmplt/cli.creat.tem.inline.0.png       
.. image:: /docs/images/tmplt/cli.creat.tem.inline.1.png

-web

    ::
    
        #open the 4tl3tr2bl.html with firefox

.. image:: /docs/images/tmplt/cli.creat.tem.inline.2.png       



with params
~~~~~~~~~~~

    ::
    
        neggen --mode creat --tem 4tl3tr2bl --height 500 --width 500 --iheight 1/5 --iwidth 1/5 --itop 2/5 --ileft 2/5
        ls -l 4tl3tr2bl
        #open the 4tl3tr2bl.html with firefox
        
.. image:: /docs/images/tmplt/cli.creat.tem.params.0.png 


PKG
=======

    ::
    
        var neggen = require("./neggen")
        neggen.getAllTemNames()
        neggen.showAllTems()
        neggen.srchTem("4tl3")
        neggen.printTem("4tl3tr2bl")
        neggen.config.template = "4tl3tr2bl"
        neggen.config
        neggen.getTemCfg()
        neggen.creat()        



Template naming  rules
-----------------------

    ::
    
        two rule-sets ,either is OK.
       
*example*       
=========

    ::
    
        template names: [ '4tl3tr2bl', 'rm4@7@8@9@11@16@18' ]
        layout as below:

.. image:: /docs/images/tmplt/cli.printTem.0.png

1. using brief zone name
========================

    ::
        
        how to get '4tl3tr2bl'
        
        A. the brief-zone-names:
            ---------------------------------------------
            |  tl           |    t      |     tr        |
            ---------------------------------------------
            |               |           |               |
            |   l           |    i      |      r        |
            |               |           |               |
            ---------------------------------------------
            |   bl          |    b      |     br        |
            ---------------------------------------------
        
        B. the zone-numbers:
            ---------------------------------------------
            |     0         |    1      |     2         |
            ---------------------------------------------
            |               |           |               |
            |     3         |    4      |      5        |
            |               |           |               |
            ---------------------------------------------
            |     6         |    7      |     8         |
            ---------------------------------------------
        
        C.  so the brief-zone-names in zone-number-sequence is:
            [tl,t,tr,l,i,r,bl,b,br]
        
        D. the colors and zones(in zone-number-sequence) relationship:
            red:[tl,t,l,i]   ------------ 4 zones,the first is tl --- 4tl
            yellow:[tr,r,br] ------------ 3 zones,the first is tr --- 3tr
            white:[bl,b]     ------------ 2 zones,the first is bl --- 2bl
            
            so we get 4tl3tr2bl
            
                      
2. using removed segment numbers
================================

    ::
    
        how to get 'rm4@7@8@9@11@16@18'
        
        A. the segment-numbers:
            ----0-------1-------2---
            |       |       |      |
            3       4       5      6
            |       |       |      |
            ----7-------8-------9---
            |       |       |      |
            10     11      12     13
            |       |       |      |
            ---14------15------16---
            |       |       |      |
            17     18      19     20
            |       |       |      |
            ---21------22------23---
        
        B. after removing 4,7,8,9,11,16,18:
            ----0-------1-------2---
            |               |      |
            3               5      6
            |               |      |
            -               -      -
            |               |      |
            10             12     13
            |               |      |
            ---14------15----      -
            |               |      |
            17             19     20
            |               |      |
            ---21------22------23---       
        
            so we get rm4@7@8@9@11@16@18
        
        
Zone,Point,Segment
------------------

    ::
            
        A. zone-numbers
            ---------------------------------------------
            |     0         |    1      |     2         |
            ---------------------------------------------
            |               |           |               |
            |     3         |    4      |      5        |
            |               |           |               |
            ---------------------------------------------
            |     6         |    7      |     8         |
            ---------------------------------------------
            
        B. zone-names
            ---------------------------------------------
            |     zetl      |   zetop   |     zetr      |
            |-------------------------------------------|
            |               |           |               |
            |     zel       |   zinner  |     zer       |
            |               |           |               |
            |-------------------------------------------|
            |     zebl      |   zebot   |    zebr       |
            ---------------------------------------------
         
        C.  brief-zone-names       
            ---------------------------------------------
            |  tl           |    t      |     tr        |
            ---------------------------------------------
            |               |           |               |
            |   l           |    i      |      r        |
            |               |           |               |
            ---------------------------------------------
            |   bl          |    b      |     br        |
            ---------------------------------------------        
        
        D.  point-numbers
            0-------1-------2------3
            |       |       |      |
            4-------5-------6------7
            |       |       |      |
            8-------9-------10-----11
            |       |       |      |
            12-----13-------14-----15  
            
        E.  point-names
            etlspt----------etseglspt---etsegrspt-------etrspt
               |     zetl      |   zetop   |     zetr      |
            elsegtspt---------itlspt-------itrspt---------ersegtspt
               |               |           |               |
               |     zel       |   zinner  |     zer       |
               |               |           |               |
            elsegbspt--------iblspt-------ibrspt----------ersegbspt
               |     zebl      |   zebot   |    zebr       |
            eblspt---------ebseglspt---ebsegrspt----------ebrspt
         
            #itlspt       inner-top-left-split-point
            #itrspt       inner-top-right-split-point
            #iblspt       inner-bottom-left-split-point
            #ibrspt       inner-bottom-right-split-point
            
          F. the segment-numbers:
              ----0-------1-------2---
              |       |       |      |
              3       4       5      6
              |       |       |      |
              ----7-------8-------9---
              |       |       |      |
              10     11      12     13
              |       |       |      |
              ---14------15------16---
              |       |       |      |
              17     18      19     20
              |       |       |      |
              ---21------22------23---     
        

       
        

the project name meaning
-------------------------

    ::
    
        the name comes from a ancient chinese book;
        this book definited 64 rune-symbols;
        it could be mapped to binary from 0x000000 to 0x111111;
        the ninth: 0x001001 "艮" whose pronunciation is "gen";
        for symmetric , <neg-gen>;
        its the name-story
        
        爻位
        ====
        - 上
        - 五
        - 四
        - 三
        - 二
        - 初

        对应符号
        =======
        - 阳-九-1
        - 阴-六-0

        # 名字来历

            | 9 = 0x001001
            | 按照从初到上的顺序 001001 对应的卦象为：艮，发音位gen
            | 按照从上到初的顺序 100100 对应的卦象为：震，发音为zhen
            | 为了对称把gen反写为neg
            | negzhen
            | 但是negzhen不好看，为了对称
            | neggen         
        

 
