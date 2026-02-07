import * as vscode from 'vscode';
import { formatCurlCommand } from './format';

/**
 * Activate the extension
 */
export function activate(context: vscode.ExtensionContext) {
  console.log('Curl Format extension is now active!');

  // Register the document formatting edit provider for .curl files
  const formatter = vscode.languages.registerDocumentFormattingEditProvider(
    'curl',
    new CurlFormatter()
  );

  // Register the document range formatting edit provider for .curl files
  const rangeFormatter = vscode.languages.registerDocumentRangeFormattingEditProvider(
    'curl',
    new CurlFormatter()
  );

  context.subscriptions.push(formatter, rangeFormatter);
}

/**
 * Deactivate the extension
 */
export function deactivate() {
  console.log('Curl Format extension is now deactivated!');
}

/**
 * Curl Formatter implementation
 */
class CurlFormatter
  implements
    vscode.DocumentFormattingEditProvider,
    vscode.DocumentRangeFormattingEditProvider
{
  /**
   * Provide formatting edits for the entire document
   */
  public provideDocumentFormattingEdits(
    document: vscode.TextDocument,
    options: vscode.FormattingOptions,
    token: vscode.CancellationToken
  ): vscode.TextEdit[] {
    const fullRange = new vscode.Range(
      document.lineAt(0).range.start,
      document.lineAt(document.lineCount - 1).range.end
    );
    return this.formatDocument(document, fullRange);
  }

  /**
   * Provide formatting edits for a selected range
   */
  public provideDocumentRangeFormattingEdits(
    document: vscode.TextDocument,
    range: vscode.Range,
    options: vscode.FormattingOptions,
    token: vscode.CancellationToken
  ): vscode.TextEdit[] {
    return this.formatDocument(document, range);
  }

  /**
   * Format the document or range
   */
  private formatDocument(
    document: vscode.TextDocument,
    range: vscode.Range
  ): vscode.TextEdit[] {
    const text = document.getText(range);
    const formattedText = formatCurlCommand(text);

    if (text === formattedText) {
      return [];
    }

    return [vscode.TextEdit.replace(range, formattedText)];
  }
}
