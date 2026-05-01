const fs = require('fs');
const filePath = 'C:\\Users\\JONTY PATEL\\OneDrive\\Desktop\\ShopGenie\\shop_genie\\frontend\\pages\\DashboardPages.jsx';
let content = fs.readFileSync(filePath, 'utf8');

// Fix the reduce syntax - replace the malformed reduce calls
content = content.replace(
  /const totalVisitors = visitorData\.reduce\(\(sum,\s+d\)\s+=>\s+sum\s+\+\s+d\.visitors,\s+0\);/g,
  'const totalVisitors = visitorData.reduce((sum, d) => sum + d.visitors, 0);'
);
content = content.replace(
  /const totalViews = productViewData\.reduce\(\(sum,\s+d\)\s+=>\s+sum\s+\+\s+d\.views,\s+0\);/g,
  'const totalViews = productViewData.reduce((sum, d) => sum + d.views, 0);'
);

fs.writeFileSync(filePath, content, 'utf8');
console.log('Fixed reduce syntax');
