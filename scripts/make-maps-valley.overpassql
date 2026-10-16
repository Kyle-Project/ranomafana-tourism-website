[out:json][timeout:120];
(
  way["highway"~"^(trunk|primary|secondary|tertiary)$"](-21.30,47.37,-21.22,47.50);
  way["waterway"="river"](-21.30,47.37,-21.22,47.50);
  way(32768136);
  relation(5185264);
);
out geom;
