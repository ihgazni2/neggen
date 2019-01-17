*neggen*
--------

In Progressing
--------------

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

Variable Name
--------------

    ::
    
        #tl top-left            (r,c)
        #tr top-right           (r,c)
        #bl bottom-left         (r,c)
        #br bottom-right        (r,c)
        
        ---------------------------------------------
        | edge-top-left | edge-top  | edge-top-right|
        ---------------------------------------------
        |               |           |               |
        |   edge-left   |   INNER   |   edge-right  |
        |               |           |               |
        ---------------------------------------------
        | edge-bot-left | edge-bot  | edge-bot-right|
        ---------------------------------------------
        
        #zetl         zone-edge-top-left
        #zetr         zone-edge-top-right
        #zebl         zone-edge-bottom-left
        #zebr         zone-edge-bottom-right
        #zetop        zone-edge-top
        #zel          zone-edge-left
        #zer          zone-edge-right
        #zebot        zone-edge-bottom
        #zinner       zone-inner
        
        ---------------------------------------------
        |     0         |    1      |     2         |
        ---------------------------------------------
        |               |           |               |
        |     3         |    4      |      5        |
        |               |           |               |
        ---------------------------------------------
        |     6         |    7      |     8         |
        ---------------------------------------------
        
        
        #zetl         0
        #zel          3
        #zebl         6
        #zebot        7
        #zebr         8
        #zer          5
        #zetr         2
        #zetop        1
        #zinner       4
        
        
         etlspt---------------------------------------etrspt
            |     zetl      |   zetop   |     zetr      |
            |------------itlspt-------itrspt------------|
            |               |           |               |
            |     zel       |   zinner  |     zer       |
            |               |           |               |
            |------------iblspt-------ibrspt------------|
            |     zebl      |   zebot   |    zebr       |
         eblspt----------------------------------------ebrspt
        
        #z            zone
        #i            inner
        #e            edge
        
        
        #pt           ponit
        #spt          split-point
        #itlspt       inner-top-left-split-point
        #itrspt       inner-top-right-split-point
        #iblspt       inner-bottom-left-split-point
        #ibrspt       inner-bottom-right-split-point
        
        
        #seg          segment
        
        zone = {
            tlspt:[r,c],
            trspt:[r,c],
            blspt:[r,c],
            brspt:[r,c],
            tseg:[tlspt,trspt],
            lseg:[tlspt,blspt],
            bseg:[blspt,brspt],
            rseg:[trspt,brspt]
        }
        
        tlspt------tseg-------trspt
          |                     |
         lseg      Zone       rseg
          |                     |
        blspt-----bseg---------brspt
        
        
        
        #pos            postion
        
        {
            left:c,
            top:r,
            right:c,
            bottom:r
        }
        
        #
         etlspt----------etseglspt---etsegrspt-------etrspt
            |     zetl      |   zetop   |     zetr      |
         elsegtspt---------itlspt-------itrspt---------ersegtspt
            |               |           |               |
            |     zel       |   zinner  |     zer       |
            |               |           |               |
         elsegbspt--------iblspt-------ibrspt----------ersegbspt
            |     zebl      |   zebot   |    zebr       |
         eblspt---------ebseglspt---ebsegrspt----------ebrspt
         
        
        
        #vw              view
        #pvw             parent-view
        
        #segs
        
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
        
        
        #ptnum
        
        0-------1-------2------3
        |       |       |      |
        4-------5-------6------7
        |       |       |      |
        8-------9-------10-----11
        |       |       |      |
        12-----13-------14-----15
        
        
        #znum
        ---------------------------------------------
        |     0         |    1      |     2         |
        ---------------------------------------------
        |               |           |               |
        |     3         |    4      |      5        |
        |               |           |               |
        ---------------------------------------------
        |     6         |    7      |     8         |
        ---------------------------------------------    
