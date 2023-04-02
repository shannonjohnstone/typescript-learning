import { WinsAnalysis } from './analyzers/WinsAnalysis';
import { CsvFileReader } from './file-reader/CsvFileReader';
import { MatcheReader } from './modules/matches/MatchReader';
import { ConsoleReporter } from './reporters/ConsoleReporter';
import { Summary } from './analyzers/AnalyzerSummary';
import { HtmlReporter } from './reporters/HtmlReporter';

console.log('Sport Report!!');

const matchReader = new MatcheReader(new CsvFileReader('football.csv'));

const manUnitedWinsAnalyer = new Summary(new WinsAnalysis('Man United'), new ConsoleReporter());
const manUnitedWinsHtmlAnalyer = Summary.winsReportedInHtml('Man United');

manUnitedWinsAnalyer.run(matchReader.load());
manUnitedWinsHtmlAnalyer.run(matchReader.load());
