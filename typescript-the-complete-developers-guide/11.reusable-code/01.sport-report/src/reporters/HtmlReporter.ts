import fs from 'fs';
import { OutputTarget } from '../analyzers/AnalyzerSummary';

export class HtmlReporter implements OutputTarget {
  print(report: string): void {
    const html = `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>HTML Report</title>
      </head>
      <body>
        ${report}    
      </body>
    </html>
    `;

    fs.writeFileSync('report.html', html);
  }
}
