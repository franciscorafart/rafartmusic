import fs from 'fs';
import path from 'path';

/**
 * Exports a Sanity content array to a local JavaScript file
 * @param {Array} posts - Array of post objects to export
 * @param {string} filename - Name of the output file (optional, defaults to 'posts-export.js')
 */
export function exportPostsToFile(posts, filename = 'posts-export.js') {
  try {
    // Ensure posts is an array
    if (!Array.isArray(posts)) {
      throw new Error('Posts parameter must be an array');
    }

    // Create JavaScript file content with proper formatting
    const jsContent = `// Auto-generated posts export
// Generated on: ${new Date().toISOString()}

const posts = ${JSON.stringify(posts, null, 2)};

export default posts;

// Alternative: Named export
// export { posts };

// Alternative: CommonJS export
// module.exports = posts;
`;

    // Determine file path - save to project root by default
    const filePath = path.join(process.cwd(), filename);
    
    // Write the file
    fs.writeFileSync(filePath, jsContent, 'utf8');
    
    console.log(`✅ Posts successfully exported to: ${filePath}`);
    console.log(`📊 Exported ${posts.length} posts`);
    
    return {
      success: true,
      filePath,
      postCount: posts.length
    };

  } catch (error) {
    console.error('❌ Error exporting posts:', error.message);
    return {
      success: false,
      error: error.message
    };
  }
}

/**
 * Exports posts to a JSON file (alternative format)
 * @param {Array} posts - Array of post objects to export
 * @param {string} filename - Name of the output file (optional, defaults to 'posts-export.json')
 */
export function exportPostsToJSON(posts, filename = 'posts-export.json') {
  try {
    if (!Array.isArray(posts)) {
      throw new Error('Posts parameter must be an array');
    }

    const filePath = path.join(process.cwd(), filename);
    fs.writeFileSync(filePath, JSON.stringify(posts, null, 2), 'utf8');
    
    console.log(`✅ Posts successfully exported to JSON: ${filePath}`);
    console.log(`📊 Exported ${posts.length} posts`);
    
    return {
      success: true,
      filePath,
      postCount: posts.length
    };

  } catch (error) {
    console.error('❌ Error exporting posts to JSON:', error.message);
    return {
      success: false,
      error: error.message
    };
  }
}